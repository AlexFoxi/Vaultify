'use client'

import cn from 'clsx'
import { DefaultLocale, routing } from 'i18n/routing'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'
import useClickOutside from '@/helpers/clickOutside'

const LangSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = pathname.startsWith('/ua') ? 'ua' : DefaultLocale
  const [open, setOpen] = useState(false)
  const langBoxRef = useRef<HTMLDivElement | null>(null)

  const handleLanguageShow = () => {
    setOpen(!open)
  }

  const handleLanguageChange = (locale: string) => {
    const newPath = pathname.replace(/^\/(en|ua)/, `/${locale}`)
    router.push(newPath)

    setOpen(false)
  }

  useClickOutside(langBoxRef, () => setOpen(false))

  return (
    <div className={styles.LangBox} ref={langBoxRef}>
      <div className={styles.activeLang} onClick={handleLanguageShow}>
        <button
          className={styles.lang}
          aria-expanded={open}
          aria-haspopup='listbox'
        >
          {currentLocale}
        </button>
      </div>
      <div className={cn(styles.dropdown, open && styles.show)} role='listbox'>
        {routing.locales.map(locale => (
          <button
            key={locale}
            className={cn(
              styles.lang,
              currentLocale === locale ? styles.selected : ''
            )}
            onClick={() => handleLanguageChange(locale)}
            role='option'
            aria-selected={currentLocale === locale}
          >
            {locale}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LangSwitcher
