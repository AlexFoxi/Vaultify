import NotFound from '@/pagess/404'

export const meta = {
  robots: {
    index: false,
    follow: false
  }
}

export default function NotFoundPage() {
  return <NotFound />
}
