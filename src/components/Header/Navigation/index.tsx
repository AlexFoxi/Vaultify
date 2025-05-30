'use client'

import cn from 'clsx'
import { useTranslations } from 'next-intl'

import NavigationLink from '@/components/ui/NavLink'

import styles from './styles.module.scss'

interface NavigationProps {
  locale: string
}

const Navigation: React.FC<NavigationProps> = ({ locale }) => {
  const t = useTranslations('header')

  const links = [
    { href: '/books', name: 'books' },
    { href: '/films', name: 'films' },
    { href: '/anime', name: 'anime' }
  ]

  return (
    <div className={styles.nav}>
      {links.map(({ href, name }) => (
        <NavigationLink
          key={href}
          href={href}
          className={styles.navItem}
          locale={locale}
        >
          <span>{t(name)}</span>
        </NavigationLink>
      ))}
    </div>
  )
}

export default Navigation
