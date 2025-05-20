import ErrorPage from '@/layouts/Error'
import NotFound from '@/screens/404'

export const meta = {
  robots: {
    index: false,
    follow: false
  }
}

export default function NotFoundPage() {
  return (
    <ErrorPage locale='en'>
      <NotFound />
    </ErrorPage>
  )
}
