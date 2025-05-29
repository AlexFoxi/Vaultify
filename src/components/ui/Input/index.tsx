import cn from 'clsx'
import { HTMLAttributes, ReactElement, useState } from 'react'
import React from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

import { EyeHiddenIco, EyeIco } from '@/assets/icons'

import styles from './styles.module.scss'

type Type = 'text' | 'number' | 'email' | 'password'
type Variant = 'none' | 'bordered'
type ErrorType =
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>
  | undefined

interface Props extends HTMLAttributes<HTMLDivElement> {
  forId?: string
  type: Type
  title?: string
  required?: boolean
  variant?: Variant
  placeholder?: string
  error?: ErrorType
  readonly?: boolean
  defaultValue: string | number
  toggleType?: boolean
  icon?: ReactElement
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const getErrorMessage = (error: ErrorType): string | undefined => {
  if (typeof error === 'string') return error

  if (error && 'message' in error && typeof error.message === 'string') {
    return error.message
  }

  return undefined
}

const Input = ({
  forId,
  type = 'text',
  title,
  required = false,
  variant = 'bordered',
  placeholder,
  error,
  readonly = false,
  defaultValue = '',
  toggleType = false,
  icon,
  onChange,
  ...rest
}: Props) => {
  const [value, setValue] = useState(defaultValue)
  const [showPassword, setShowPassword] = useState(false)
  const inputType = type === 'password' && !showPassword ? 'password' : 'text'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)

    if (onChange) {
      onChange(e)
    }
  }

  const errorMessage = getErrorMessage(error)

  return (
    <div className={styles.inputBox}>
      {title && (
        <label className={styles.title} htmlFor={forId}>
          {title}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.group}>
        <div className={styles.inputGroup}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <input
            type={inputType}
            className={cn(
              styles.input,
              error && styles.error,
              variant && styles[variant],
              icon && styles.iconed,
              toggleType && styles.toggled
            )}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            readOnly={readonly}
            id={forId}
            {...rest}
          />
          {toggleType && (
            <button
              type='button'
              className={styles.toggleButton}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeIco /> : <EyeHiddenIco />}
            </button>
          )}
        </div>
        {error && <span className={styles.errorText}>{errorMessage}</span>}
      </div>
    </div>
  )
}

Input.displayName = 'Input'

export default React.memo(Input)
