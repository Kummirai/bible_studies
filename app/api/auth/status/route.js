import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is not set.');
  }
  return new TextEncoder().encode(secret);
};

export async function GET(request) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ isLoggedIn: false });
  }

  try {
    await jwtVerify(token, getJwtSecret());
    return NextResponse.json({ isLoggedIn: true });
  } catch (error) {
    return NextResponse.json({ isLoggedIn: false });
  }
}
