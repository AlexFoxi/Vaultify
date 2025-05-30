import cn from 'clsx'
import React from 'react'

import styles from './styles.module.scss'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant: 'none' | 'bordered'
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({
  variant = 'bordered',
  type = 'button',
  onClick,
  children,
  ...rest
}: Props) => {
  return variant === 'bordered' ? (
    <div className={styles.bordered}>
      <button type={type} className={styles.button} onClick={onClick} {...rest}>
        {children}
      </button>
    </div>
  ) : (
    <button
      type={type}
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
