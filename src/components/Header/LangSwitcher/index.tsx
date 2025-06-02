'use client'

import cn from 'clsx'
import { Link, usePathname } from 'i18n/navigation'
import { routing } from 'i18n/routing'
import { useLocale } from 'next-intl'
import { memo, useRef, useState } from 'react'

import { LangIco } from '@/assets/icons'

import styles from './styles.module.scss'
import useClickOutside from '@/helpers/clickOutside'

const LangSwitcher = () => {
  const locale = useLocale()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const langBoxRef = useRef<HTMLDivElement | null>(null)

  useClickOutside(langBoxRef, () => setOpen(false))

  return (
    <div className={cn(styles.LangBox, open && styles.show)} ref={langBoxRef}>
      <div className={styles.activeLang} onClick={() => setOpen(!open)}>
        <LangIco />
      </div>
      <div className={styles.dropdown}>
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

export default memo(LangSwitcher)
