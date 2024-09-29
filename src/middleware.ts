import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export default async function middleware(request: NextRequest) {
  const session = await auth();
  // const cookieStore = cookies();
  //   const token = cookieStore.get("chat-auth");
  //   console.log(token)
  if (!session && request.nextUrl.pathname === "/host") {
    return NextResponse.redirect(new URL("/join-session", request.url));
  }
  if (!session && request.nextUrl.pathname === "/user") {
    return NextResponse.redirect(new URL("/join-session", request.url));
  }
  // if (session && request.nextUrl.pathname === "/") {
  //   return NextResponse.redirect(new URL("/user", request.url));
  // }
}
