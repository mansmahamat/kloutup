// src/middleware.ts
import { NextRequest, NextResponse } from "next/server"

export const middleware = async (request: NextRequest) => {
  //@ts-ignore
  console.log(JSON.stringify(request?.cookies?.session))
  //   if (request?.nextUrl.pathname.startsWith("/admin")) {
  //     const authCookie = request.cookies.get("supabase-auth-token")
  //     if (!authCookie) return NextResponse.redirect(new URL("/", request.url))
  //   }
}
