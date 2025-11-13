
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is not set.');
  }
  return new TextEncoder().encode(secret);
};

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token')?.value;

  if (!token) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ message: 'Authentication required.' }, { status: 401 });
    }
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  try {
    await jwtVerify(token, getJwtSecret());
    return NextResponse.next();
  } catch (error) {
    console.error('JWT verification error:', error);
    const response = pathname.startsWith('/api/')
      ? NextResponse.json({ message: 'Invalid token.' }, { status: 401 })
      : NextResponse.redirect(new URL('/auth/login', request.url));
    
    // Clear invalid token
    response.cookies.delete('token');
    
    return response;
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/user/:path*'],
};
