
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request) {
  try {
    cookies().delete('token');
    return NextResponse.json({ message: 'Logged out successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error during logout:', error);
    return NextResponse.json({ message: 'Error during logout.' }, { status: 500 });
  }
}
