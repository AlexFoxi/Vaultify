'use client'

import ErrorPage from '@/layouts/Error'
import ServerError from '@/screens/500'

export const meta = {
  robots: {
    index: false,
    follow: false
  }
}

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <ErrorPage locale='en'>
      <ServerError error={error} reset={reset} />
    </ErrorPage>
  )
}
