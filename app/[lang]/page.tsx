import { notFound } from 'next/navigation'

import Home from '@/components/HomePage'

import { DEFAULT_LANG } from '../../middleware'

const LANGUAGES = [DEFAULT_LANG, 'ua']

interface Props {
  params: { lang: string }
}

export default async function Page({ params }: Props) {
  const { lang } = await params

  if (!LANGUAGES.includes(lang)) {
    return notFound()
  }

  return (
    <main>
      {/* <h1 className='text-3xl font-bold'>Language: {lang?.toUpperCase()}</h1> */}
      <Home />
    </main>
  )
}
