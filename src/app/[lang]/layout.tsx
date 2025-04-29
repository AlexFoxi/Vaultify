import MainLayout from '@/layouts/MainLayout'

type Props = {
  children: React.ReactNode
  params: { id: string; lang: string }
}

export default async function Layout({ children, params }: Props) {
  return <MainLayout params={params}>{children}</MainLayout>
}
