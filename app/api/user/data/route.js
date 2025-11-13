
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

export async function GET(request) {
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

    const client = await clientPromise;
    const db = client.db('theology');
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne(
      { _id: new ObjectId(decoded.userId) },
      { projection: { password: 0 } } // Exclude password from the result
    );

    if (!user) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }

    // For each enrolled course, fetch the full course details
    const coursesCollection = db.collection('courses');
    const electivesCollection = db.collection('electives');
    const generalEducationCollection = db.collection('general_education');

    const enrolledCoursesDetails = await Promise.all(
        user.enrolledCourses.map(async (enrolledCourse) => {
            let courseDetails = await coursesCollection.findOne({ _id: new ObjectId(enrolledCourse.courseId) });
            if (!courseDetails) {
                courseDetails = await electivesCollection.findOne({ _id: new ObjectId(enrolledCourse.courseId) });
            }
            if (!courseDetails) {
                courseDetails = await generalEducationCollection.findOne({ _id: new ObjectId(enrolledCourse.courseId) });
            }
            return {
                ...enrolledCourse,
                courseDetails: courseDetails?.course,
            };
        })
    );

    user.enrolledCourses = enrolledCoursesDetails;


    return NextResponse.json(user, { status: 200 });

  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ message: 'Error fetching user data.' }, { status: 500 });
  }
}
