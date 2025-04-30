import { NextRequest, NextResponse } from 'next/server'

export const DEFAULT_LANG = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = `/${DEFAULT_LANG}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|sitemap-filters.xml|manifest.json|.*\\..*).*)'
  ]
}
