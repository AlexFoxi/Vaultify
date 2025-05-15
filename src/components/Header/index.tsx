'use client'

import cn from 'clsx'
import { Link, usePathname } from 'i18n/navigation'
import { useLocale } from 'next-intl'
import Image from 'next/image'

import NavigationLink from '@/ui/NavLink'

import LangSwitcher from './LangSwitcher'
import Search from './Search'
import Theme from './Theme'
import User from './User'
import styles from './styles.module.scss'
import { projectInfo } from '@/helpers/projectInfo'

export default function Header() {
  const pathname = usePathname()
  const locale = useLocale()
  const logo = projectInfo.logo

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/en' || pathname === '/ua') {
      e.preventDefault()
    }
  }

  return (
    <div className={styles.header}>
      <div className={cn('container', styles.navBar)}>
        <div className={styles.logo}>
          <Link
            href={pathname}
            onClick={handleLogoClick}
            title='Logo'
            locale={locale}
          >
            <Image
              src={logo.path}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </Link>
        </div>
        <div className={styles.nav}>
          <NavigationLink
            href={`/books`}
            className={styles.navItem}
            locale={locale}
          >
            <span>Books</span>
          </NavigationLink>
          <NavigationLink
            href={`/films`}
            className={styles.navItem}
            locale={locale}
          >
            <span>Films</span>
          </NavigationLink>
          <NavigationLink
            href={`/anime`}
            className={styles.navItem}
            locale={locale}
          >
            <span>Anime</span>
          </NavigationLink>
        </div>
        <Search />
        <Theme />
        <LangSwitcher />
        <User />
      </div>
    </div>
  )
}
