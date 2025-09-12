// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyJwt } from '@/lib/auth';

const protectedRoutes = ['/dashboard'];

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const isAuthenticated = token && verifyJwt(token);

  const isProtected = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route));

  if (isProtected && !isAuthenticated) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

/*export function middleware(req: NextRequest) {
console.log('JWT_SECRET in middleware=====:', process.env.JWT_SECRET);
  const token = req.cookies.get('token')?.value;
  console.log("token=====", token);
  const isAuthenticated = token && verifyJwt(token);
  if (req.nextUrl.pathname.startsWith('/dashboard') && !isAuthenticated) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  return NextResponse.next();
}*/

export const config = {
  matcher: ['/dashboard/:path*'],
};
