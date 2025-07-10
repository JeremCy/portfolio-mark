// middleware.js or middleware.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is to the root path
  if (pathname === "/") {
    // Determine the locale you want to redirect to
    // This could be based on user preferences, browser settings, etc.
    const locale = "fr"; // Default locale or determine dynamically

    // Redirect to the determined locale
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
