'use client'

import ServerError from '@/pagess/500'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <ServerError error={error} reset={reset} />
}
