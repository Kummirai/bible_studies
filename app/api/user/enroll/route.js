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

    const { courseCode } = await request.json();
    if (!courseCode) {
      return NextResponse.json({ message: 'Course code is required.' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('theology');
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ _id: new ObjectId(decoded.userId) });
    if (!user) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }

    const isEnrolled = user.enrolledCourses.some(course => course.courseCode === courseCode);
    if (isEnrolled) {
      return NextResponse.json({ message: 'Already enrolled in this course.' }, { status: 409 });
    }

    // Fetch course details to store in the user's document
    const coursesCollection = db.collection('courses');
    const course = await coursesCollection.findOne({ 'course.code': courseCode });
    if (!course) {
        // Check other collections if not in courses
        const electivesCollection = db.collection('electives');
        const elective = await electivesCollection.findOne({ 'course.code': courseCode });
        if(!elective) {
            const generalEducationCollection = db.collection('general_education');
            const generalEducation = await generalEducationCollection.findOne({ 'course.code': courseCode });
            if(!generalEducation) {
                 return NextResponse.json({ message: 'Course not found.' }, { status: 404 });
            }
             await usersCollection.updateOne(
                { _id: new ObjectId(decoded.userId) },
                { $push: { enrolledCourses: { courseId: generalEducation._id, courseCode, progress: 0, completedModules: [] } } }
            );
        } else {
            await usersCollection.updateOne(
                { _id: new ObjectId(decoded.userId) },
                { $push: { enrolledCourses: { courseId: elective._id, courseCode, progress: 0, completedModules: [] } } }
            );
        }
    } else {
         await usersCollection.updateOne(
            { _id: new ObjectId(decoded.userId) },
            { $push: { enrolledCourses: { courseId: course._id, courseCode, progress: 0, completedModules: [] } } }
        );
    }

    return NextResponse.json({ message: 'Enrolled successfully.' }, { status: 200 });

  } catch (error) {
    console.error('Enrollment error:', error);
    return NextResponse.json({ message: 'Error enrolling in course.' }, { status: 500 });
  }
}