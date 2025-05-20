'use client'

import cn from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

const Theme = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [hydratedTheme, setHydratedTheme] = useState<'light' | 'dark' | null>(
    null
  )

  useEffect(() => {
    setHydratedTheme(resolvedTheme as 'light' | 'dark')
  }, [resolvedTheme])

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    setHydratedTheme(newTheme)
  }

  return (
    <div className={styles.theme}>
      <button
        onClick={toggleTheme}
        className={cn(styles.toggler, hydratedTheme && styles[hydratedTheme])}
        aria-label='Toggle Theme'
      >
        <div className={styles.dot}></div>
      </button>
    </div>
  )
}
export default Theme
