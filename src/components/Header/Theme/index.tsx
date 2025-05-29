'use client'

import cn from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { MoonIco, SunIco } from '@/assets/icons'

import styles from './styles.module.scss'

const Theme = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [hydratedTheme, setHydratedTheme] = useState<'light' | 'dark' | null>(
    null
  )

  useEffect(() => {
    setHydratedTheme(resolvedTheme as 'light' | 'dark')
  }, [resolvedTheme])

  if (!hydratedTheme) return null

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    setHydratedTheme(newTheme)
  }

  return (
    <div className={styles.theme}>
      <button
        onClick={toggleTheme}
        className={styles.toggler}
        aria-label='Toggle Theme'
      >
        {hydratedTheme == 'light' ? <MoonIco /> : <SunIco />}
      </button>
    </div>
  )
}
export default Theme
