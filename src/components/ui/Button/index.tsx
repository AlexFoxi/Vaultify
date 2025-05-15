import cn from 'clsx'
import React from 'react'

import styles from './styles.module.scss'

type Variant = 'none' | 'bordered'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant: Variant
}

const Button = ({
  variant = 'bordered',
  onClick,
  children,
  ...rest
}: Props) => {
  return variant === 'bordered' ? (
    <div className={styles.bordered}>
      <button
        type='button'
        className={styles.button}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    </div>
  ) : (
    <button
      type='button'
      className={cn(styles.button, styles[variant])}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'

export default React.memo(Button)
