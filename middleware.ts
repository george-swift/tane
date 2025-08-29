import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/session'

export default async function middleware(req: NextRequest) {
  // Check if the current route is protected or not
  const path = req.nextUrl.pathname
  // const isProtectedRoute = path.startsWith('/admin')
  const isAuthRoute = path.startsWith('/login') || path.startsWith('/register')

  // Get the current user from sessions table
  const user = await getCurrentUser()

  // Redirect to /login if the user is not authenticated
  // if (isProtectedRoute && !user?.id) {
  //   return NextResponse.redirect(new URL('/login', req.nextUrl))
  // }

  // Redirect to /admin if the user is authenticated
  if (isAuthRoute && user?.id) {
    return NextResponse.redirect(new URL('/admin', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  runtime: 'nodejs',
  matcher: ['/admin/:path*', '/login', '/register']
}
