'use client'

import ServerError from '@/pages/500'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <ServerError error={error} reset={reset} />
}
