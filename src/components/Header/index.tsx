'use client'

import cn from 'clsx'
import { Link, usePathname } from 'i18n/navigation'
import { useLocale } from 'next-intl'
import NextImage from 'next/image'
import { useCallback } from 'react'

import LangSwitcher from './LangSwitcher'
import Navigation from './Navigation'
import Search from './Search'
import Theme from './Theme'
import User from './User'
import styles from './styles.module.scss'

const Header = () => {
  const pathname = usePathname()
  const locale = useLocale()

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === '/en' || pathname === '/ua') {
        e.preventDefault()
      }
    },
    [pathname]
  )

  return (
    <div className={styles.header}>
      <nav className={cn('container', styles.navBar)}>
        <div className={styles.logo}>
          <Link
            href={'/'}
            onClick={handleLogoClick}
            title='Vaultify Logo'
            locale={locale}
          >
            <NextImage
              src='/logo.svg'
              alt='Vaultify Logo'
              width={60}
              height={40}
            />
          </Link>
        </div>
        <Navigation locale={locale} />
        <Search />
        <Theme />
        <LangSwitcher />
        <User />
      </nav>
    </div>
  )
}

export default Header
