'use client'

import { useParams, useRouter } from 'next/navigation'

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
  const router = useRouter()
  const params = useParams()
  const currentLang = params['not-found']?.[0]

  const handleNavigateToHomePage = () => {
    router.push(`/${currentLang === 'en' || !currentLang ? '' : currentLang}`)
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <h1
          style={{
            fontSize: '128px',
            fontWeight: 600,
            color: '#c4ccd4',
            margin: '0 0 40px 0'
          }}
        >
          500
        </h1>
        <p
          style={{
            fontSize: '28px',
            fontWeight: 500,
            color: `var(--colors-mainText)`
          }}
        >
          {/* {t('error.serverErrorTitle')} */}
        </p>
        <p
          style={{
            marginTop: '40px',
            fontSize: '16px',
            fontWeight: 400,
            color: `var(--gray-text-color)`,
            textAlign: 'center'
          }}
        >
          {/* {t('error.serverDescription')} */}
        </p>
        <div
          style={{
            marginTop: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '160px',
            borderRadius: '10px',
            padding: '5px 15px',
            height: '45px',
            fontSize: '18px',
            background: 'var(--main-theme-color)',
            cursor: 'pointer',
            border: 'none',
            outline: 'none'
          }}
        >
          <a
            href={`/${currentLang === 'en' || !currentLang ? '' : currentLang}`}
            style={{ color: `var(--colors-white)` }}
          >
            {/* {t('error.toMainPage')} */}
          </a>
        </div>
      </div>
    </>
  )
}
