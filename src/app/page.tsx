import Lang from '@/components/HomePage'

interface Props {
  params: any
}

export default async function Page({ params }: Props) {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <h1 className='text-3xl font-bold'>Language: UA</h1>
      <Lang />
    </main>
  )
}
