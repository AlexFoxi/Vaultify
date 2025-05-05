import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { headers } from 'next/headers'

import { projectInfo } from '@/helpers/projectInfo'
import '@/styles/global.scss'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Vaultify App',
  description: 'App for story data'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const lang = (await headers()).get('X-Locale') ?? 'Uk'

  return (
    <html lang={lang}>
      <head>
        <link rel='icon' href={projectInfo.favicon} />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
