'use server';

import { cookies } from 'next/headers';

export async function getCookie(name: string) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(name);
  return cookie ? cookie.value : null;
}

export async function setCookie(
  name: string,
  value: string,
  options?: { maxAge?: number; path?: string },
) {
  const cookieStore = await cookies();
  cookieStore.set(name, value, {
    ...options,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });
}
