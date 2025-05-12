'use client'

import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  const params = useParams()
  const currentLang = (params?.['not-found'] as string)?.[0]

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
          404
        </h1>
        <p
          style={{
            fontSize: '28px',
            fontWeight: 500,
            color: `var(--colors-mainText)`
          }}
        >
          {/* {t('error.notFoundTitle')} */}
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
          <Link
            href={`/${currentLang === 'en' || !currentLang ? '' : currentLang}`}
            style={{ color: '#fff' }}
          >
            navigate
            {/* {t('error.toMainPage')} */}
          </Link>
          {/* <Button
            rounded
            // title={t('error.toMainPage')}

            size='large'
            color='main'
            fullWidth
            action={handleNavigateToHomePage}
          /> */}
        </div>
      </div>
    </>
  )
}
