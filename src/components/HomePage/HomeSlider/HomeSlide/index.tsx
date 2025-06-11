import { Link } from 'i18n/navigation'
import { ReactNode } from 'react'

import CustomImage from '@/components/ui/Image'

import styles from './styles.module.scss'

interface Props {
  slideUrl: string
  image: {
    url: string
    title: string
  }
  children: ReactNode
}

const HomeSlide: React.FC<Props> = ({ slideUrl, image, children }) => {
  return (
    <div className={styles.slide}>
      <Link href={slideUrl} className={styles.image}>
        <CustomImage
          src={image.url}
          width={148}
          height={210}
          alt={image.title}
        />
      </Link>
      <div className={styles.title}>
        <Link href={slideUrl}>{children}</Link>
      </div>
    </div>
  )
}

export default HomeSlide
