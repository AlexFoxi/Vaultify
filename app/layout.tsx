import { routing } from 'i18n/routing'
import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { ThemeProvider } from 'next-themes'

import { montserrat } from './font'
import { projectInfo } from '@/helpers/projectInfo'
import '@/styles/global.scss'

export const metadata: Metadata = {
  title: 'Vaultify App',
  description: 'App for story data'
}

export const generateStaticParams = () => {
  return routing.locales.map(locale => ({
    locale
  }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const locale = await Promise.resolve((await params).locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel='icon' href={projectInfo.favicon} />
      </head>
      <body className={montserrat.className}>
        <NextIntlClientProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
