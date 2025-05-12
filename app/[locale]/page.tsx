import { routing } from 'i18n/routing'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'

import Home from '@/components/HomePage'

interface Props {
  params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <main>
      <Home />
    </main>
  )
}
