import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware", request.url);
  // Get the pathname from the URL
  const pathname = new URL(request.url).pathname;

  // Only redirect if the pathname is not '/'
  if (pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Otherwise, continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
