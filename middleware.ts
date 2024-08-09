// export { default } from 'next-auth/middleware'
//
// export const config = {
//     matcher: [
//         '/dashboard/:path*',
//     ]
// }


import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { CustomUser } from '@/types'; // Adjust the import path as needed

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const url = req.nextUrl.clone();
    const pathname = url.pathname;

    // If no token and the user is accessing a protected route, redirect to login
    if (!token) {
        if (pathname.startsWith('/admin') || pathname.startsWith('/dashboard')) {
            return NextResponse.redirect(new URL('/auth/login', req.url));
        }
    } else {
        const user = token.user as CustomUser;

        if (pathname.startsWith('/admin') && user.role !== 'ADMIN') {
            // If user is not an admin, redirect to dashboard
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }

        if (pathname.startsWith('/dashboard') && user.role !== 'USER') {
            // If user is not a regular user, redirect to admin
            return NextResponse.redirect(new URL('/admin', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/dashboard/:path*'],
};