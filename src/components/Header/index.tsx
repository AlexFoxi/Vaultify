'use client'

import cn from 'clsx'
import { DEFAULT_LANG } from 'middleware'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Theme from '@/ui/Theme'

import Search from './Search'
import styles from './styles.module.scss'
import { projectInfo } from '@/helpers/projectInfo'

export default function Header() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] || 'en'
  const logo = projectInfo.logo

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/' || pathname === '/ua') {
      e.preventDefault()
    }
  }

  return (
    <div className={styles.header}>
      <div className={cn('container', styles.navBar)}>
        <div className={styles.logo}>
          <Link
            href={`${pathname === DEFAULT_LANG ? '' : pathname}`}
            onClick={handleLogoClick}
            title='Logo'
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
          <Link href={`/${lang}/books`} className={styles.navItem}>
            <span>Books</span>
          </Link>
          <Link href={`/${lang}/films`} className={styles.navItem}>
            <span>Films</span>
          </Link>
          <Link href={`/${lang}/anime`} className={styles.navItem}>
            <span>Anime</span>
          </Link>
        </div>
        <div className={styles.search}></div>
        <Search />
        <Theme />
        <div className={styles.lang}></div>
        <div className={styles.user}></div>
      </div>
    </div>
  )
}
