'use client'

import cn from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

export default function Theme() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={styles.theme}> </div>
  }

  return (
    <div className={styles.theme}>
      <button
        onClick={toggleTheme}
        className={cn(styles.toggler, theme === 'light' ? styles.light : '')}
        aria-label='Toggle Theme'
      >
        <div className={styles.dot}></div>
      </button>
    </div>
  )
}
