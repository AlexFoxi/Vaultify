'use client'

import cn from 'clsx'
import { Link, usePathname } from 'i18n/navigation'
import { routing } from 'i18n/routing'
import { useLocale } from 'next-intl'
import { useRef, useState } from 'react'

import styles from './styles.module.scss'
import useClickOutside from '@/helpers/clickOutside'

const LangSwitcher = () => {
  const locale = useLocale()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const langBoxRef = useRef<HTMLDivElement | null>(null)

  useClickOutside(langBoxRef, () => setOpen(false))

  return (
    <div className={styles.LangBox} ref={langBoxRef}>
      <div className={styles.activeLang} onClick={() => setOpen(!open)}>
        <button className={styles.lang} aria-expanded={open}>
          {locale}
        </button>
      </div>
      <div className={cn(styles.dropdown, open && styles.show)}>
        {routing.locales.map(loc => (
          <Link
            key={loc}
            href={pathname}
            locale={loc}
            className={cn(
              styles.lang,
              locale === loc ? styles.selected : undefined
            )}
          >
            {loc}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LangSwitcher
