import { ReactNode } from 'react'

import Skeleton from '@/ui/Skeleton'

import styles from './styles.module.scss'

interface Props {
  loading: boolean
  gap?: number
  items: number
  children: ReactNode
}

const SliderSkeleton: React.FC<Props> = ({
  loading,
  gap = 0,
  items,
  children
}) => {
  return (
    <>
      {loading ? (
        <div className={styles.skeletonWrapper} style={{ gap: `${gap}px` }}>
          {Array.from({ length: items }).map((_, i) => (
            <Skeleton key={i} width={160} height={240} />
          ))}
        </div>
      ) : (
        children
      )}
    </>
  )
}

export default SliderSkeleton
