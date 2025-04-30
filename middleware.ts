import { NextRequest, NextResponse } from 'next/server'

export const DEFAULT_LANG = 'en'

const CLOSED_LINKS = ['/en']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const url = request.nextUrl.clone()

  if (CLOSED_LINKS.includes(pathname)) {
    url.pathname = `/`
    return NextResponse.redirect(url)
  }

  if (pathname === '/') {
    url.pathname = `/${DEFAULT_LANG}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
