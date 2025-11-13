import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is not set.');
  }
  return new TextEncoder().encode(secret);
};

export async function POST(request) {
  try {
    const token = request.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Authentication required.' }, { status: 401 });
    }

    let decoded;
    try {
      const { payload } = await jwtVerify(token, getJwtSecret());
      decoded = payload;
    } catch (error) {
      return NextResponse.json({ message: 'Invalid token.' }, { status: 401 });
    }

    const { courseCode, moduleId } = await request.json();
    if (!courseCode || !moduleId) {
      return NextResponse.json({ message: 'Course code and module ID are required.' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('theology');
    const usersCollection = db.collection('users');
    const modulesCollection = db.collection('modules');

    const user = await usersCollection.findOne({ _id: new ObjectId(decoded.userId) });
    if (!user) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }

    const courseIndex = user.enrolledCourses.findIndex(course => course.courseCode === courseCode);
    if (courseIndex === -1) {
      return NextResponse.json({ message: 'Not enrolled in this course.' }, { status: 404 });
    }

    const enrolledCourse = user.enrolledCourses[courseIndex];
    if (enrolledCourse.completedModules.includes(moduleId)) {
      return NextResponse.json({ message: 'Module already completed.' }, { status: 409 });
    }

    // Add module to completed list
    enrolledCourse.completedModules.push(moduleId);

    // Recalculate progress
    const courseModules = await modulesCollection.find({ 'course.code': courseCode }).toArray();
    const totalModules = courseModules.length > 0 ? courseModules[0].modules.length : 0;
    const completedCount = enrolledCourse.completedModules.length;
    const progress = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;
    enrolledCourse.progress = progress;

    // Update the user document
    await usersCollection.updateOne(
      { _id: new ObjectId(decoded.userId), 'enrolledCourses.courseCode': courseCode },
      { $set: { 'enrolledCourses.$': enrolledCourse } }
    );

    return NextResponse.json({ message: 'Progress updated successfully.', progress }, { status: 200 });

  } catch (error) {
    console.error('Progress update error:', error);
    return NextResponse.json({ message: 'Error updating progress.' }, { status: 500 });
  }
}