import { notFound } from 'next/navigation'

import Lang from '@/components/HomePage'

const languages = ['ua', 'en']

interface Props {
  params: { lang: string }
}

export default async function Page({ params }: Props) {
  const { lang } = await params
  console.log(lang)

  if (!languages.includes(lang)) {
    return notFound()
  }

  return (
    <main className='flex min-h-screen items-center justify-center'>
      <h1 className='text-3xl font-bold'>Language: {lang?.toUpperCase()}</h1>
      <Lang />
    </main>
  )
}
