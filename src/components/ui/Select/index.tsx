'use client'

import cn from 'clsx'
import { useTranslations } from 'next-intl'
import { HTMLAttributes, useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'

type Variant = 'none' | 'bordered'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string
  variant?: Variant
  placeholder?: string
  selectedVal: string | null
  list: Record<string, any>
  setSelect: (value: any) => void
  translationKey?: string
}

const Select = ({
  title,
  variant = 'bordered',
  placeholder,
  selectedVal,
  list,
  setSelect,
  translationKey
}: Props) => {
  const t = useTranslations()
  const [selected, setSelected] = useState<boolean>(false)
  const ref = useRef<any>(null)
  const selectedRef = useRef<any>(null)

  const handleSelect = (e: any, item: any) => {
    e.preventDefault()
    setSelect(item)
  }

  const handleClick = (e: any, item: any) => {
    handleSelect(e, item)
    setSelected(false)
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: Event) => {
      if (
        selected &&
        ref.current &&
        !selectedRef.current.contains(e.target) &&
        !ref.current.contains(e.target)
      ) {
        setSelected(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [selected])

  const getT = (val: string) => {
    if (!translationKey) return val
    return t(`${translationKey}.${val}`)
  }

  return (
    <div className={styles.selectBox}>
      {title && <label className={styles.title}>{title}</label>}
      <div
        ref={selected ? selectedRef : null}
        onClick={() => setSelected(!selected)}
        className={styles.box}
      >
        <span className={cn(Boolean(!selectedVal) && styles.placeholder)}>
          {selectedVal ? capitalizeFirst(getT(selectedVal)) : placeholder}
        </span>
        {/* {icon && (
          <IconWrapper className={`${selected ? 'selected ' : ''}`}>
            {icon}
          </IconWrapper>
        )} */}
      </div>
      <div
        ref={ref}
        className={cn(
          styles.list,
          selected && styles.show,
          variant && styles[variant]
        )}
        role='listbox'
      >
        {list.map((item: any) => (
          <div
            key={item.id}
            onClick={(e: any) => handleClick(e, item)}
            className={cn(
              styles.listItem,
              item.name === selectedVal ? styles.selected : ''
            )}
            role='option'
          >
            <span>{capitalizeFirst(getT(item.name))}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Select

function capitalizeFirst(str: string): string {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}
