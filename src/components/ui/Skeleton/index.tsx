import cn from 'clsx'
import React from 'react'

import styles from './styles.module.scss'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  width: number
  height: number
}

const Skeleton = ({ width, height, className, ...rest }: Props) => {
  return (
    <div
      style={{ width, height }}
      className={cn(styles.skeleton, className)}
      {...rest}
    />
  )
}

export default Skeleton
