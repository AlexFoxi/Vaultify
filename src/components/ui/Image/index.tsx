'use client'

import cn from 'clsx'
import NextImage, { ImageProps } from 'next/image'
import React, { useEffect, useState } from 'react'

import styles from './styles.module.scss'

const CustomImage: React.FC<ImageProps> = ({
  className,
  width,
  height,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showSkeleton, setShowSkeleton] = useState(true)

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => setShowSkeleton(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [isLoading])

  return (
    <div className={cn(styles.imgWrapper)}>
      {showSkeleton && (
        <div style={{ width, height }} className={styles.skeleton} />
      )}
      <NextImage
        width={width}
        height={height}
        {...rest}
        className={cn(className, styles.image, !isLoading && styles.loaded)}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}

export default CustomImage
