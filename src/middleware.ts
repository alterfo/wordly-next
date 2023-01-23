import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname.match(/^\/\d\d\d\d-\d\d$/)) {
		const nextURL = new URL('/yyyy-mm', request.url)
		nextURL.searchParams.set('yyyymm', request.nextUrl.pathname.substring(1))
		return NextResponse.rewrite(nextURL)
	}

	if (request.nextUrl.pathname.startsWith('/^\/\d\d\d\d-\d\d-\d\d$/')) {
		const nextURL = new URL('/yyyy-mm-dd', request.url)
		nextURL.searchParams.set('date', request.nextUrl.pathname.substring(1))
		return NextResponse.rewrite(nextURL)
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!_next/static|_next/image|favicon.ico).*)',
	],
}