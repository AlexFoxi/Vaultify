'use client'

import { Link } from 'i18n/navigation'
import { useSelectedLayoutSegment } from 'next/navigation'
import { ComponentProps } from 'react'

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === href

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      href={href}
      style={{ fontWeight: isActive ? 'bold' : 'normal' }}
      {...rest}
    />
  )
}
