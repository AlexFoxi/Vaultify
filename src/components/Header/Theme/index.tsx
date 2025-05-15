'use client'

import cn from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

const Theme = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={styles.theme}>
      {mounted && (
        <button
          onClick={handleToggleTheme}
          className={cn(styles.toggler, theme === 'light' ? styles.light : '')}
          aria-label='Toggle Theme'
        >
          <div className={styles.dot}></div>
        </button>
      )}
    </div>
  )
}
export default Theme
