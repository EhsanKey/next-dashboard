import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCookie } from './actions/cookies';

export async function middleware(request: NextRequest) {
  const token = await getCookie('token');

  const url = request.nextUrl;

  if (url.pathname === '/') {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    } else {
      return NextResponse.redirect(new URL('/auth', request.url));
    }
  }

  if (url.pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  if (url.pathname.startsWith('/auth') && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}
