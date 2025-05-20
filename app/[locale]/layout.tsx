import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'

import MainLayout from '@/layouts/MainLayout'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function Layout({ children, params }: Props) {
  const locale = await Promise.resolve((await params).locale)

  return (
    <NextIntlClientProvider locale={locale}>
      <ThemeProvider attribute='data-theme' defaultTheme='system'>
        <MainLayout params={params}>{children}</MainLayout>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
