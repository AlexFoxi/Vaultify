import { montserrat } from 'app/font'
import { routing } from 'i18n/routing'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'

import { projectInfo } from '@/helpers/projectInfo'
import MainLayout from '@/layouts/MainLayout'
import '@/styles/global.scss'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export const metadata: Metadata = {
  title: 'Vaultify App',
  description: 'App for story data'
}

export const generateStaticParams = () => {
  return routing.locales.map(locale => ({
    locale
  }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const locale = await Promise.resolve((await params).locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel='icon' href={projectInfo.favicon} />
      </head>
      <body className={montserrat.className}>
        <NextIntlClientProvider locale={locale}>
          <ThemeProvider attribute='data-theme' defaultTheme='system'>
            <MainLayout params={params}>{children}</MainLayout>
          </ThemeProvider>
        </NextIntlClientProvider>
        <div id='portal-root'></div>
      </body>
    </html>
  )
}
