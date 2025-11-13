
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db('theology');
    
    const coursesCollection = db.collection('courses');
    const electivesCollection = db.collection('electives');
    const generalEducationCollection = db.collection('general_education');

    // Hardcoding current semester, this could be dynamic
    const currentSemester = "Semester 1"; 

    const filter = { 'course.semester': currentSemester };

    const courses = await coursesCollection.find(filter).toArray();
    const electives = await electivesCollection.find(filter).toArray();
    const generalEducation = await generalEducationCollection.find(filter).toArray();

    const allSuggestions = [
      ...courses.map(c => ({ ...c, type: 'Courses' })),
      ...electives.map(e => ({ ...e, type: 'Electives' })),
      ...generalEducation.map(g => ({ ...g, type: 'General Education' }))
    ];

    return NextResponse.json(allSuggestions, { status: 200 });

  } catch (error) {
    console.error('Error fetching suggested courses:', error);
    return NextResponse.json({ message: 'Error fetching suggested courses.' }, { status: 500 });
  }
}
