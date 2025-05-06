import cn from 'clsx'
import { HTMLAttributes } from 'react'

import styles from './styles.module.scss'

type Type = 'text' | 'number' | 'email' | 'password'
type Variant = 'none' | 'bordered'

interface Props extends HTMLAttributes<HTMLDivElement> {
  type: Type
  title?: string
  required?: boolean
  variant?: Variant
  placeholder?: string
  error?: string
  readonly?: boolean
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  type = 'text',
  title,
  required = false,
  variant = 'bordered',
  placeholder,
  error,
  readonly = false,
  value,
  onChange,
  ...rest
}: Props) => {
  return (
    <div className={styles.inputBox}>
      {title && (
        <label className={styles.title}>
          {title}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={cn(styles.box, variant && styles[variant])}>
        <input
          type={type}
          className={cn(styles.input, error && styles.error)}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          readOnly={readonly}
          {...rest}
        />
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    </div>
  )
}

Input.displayName = 'Input'

export default Input
