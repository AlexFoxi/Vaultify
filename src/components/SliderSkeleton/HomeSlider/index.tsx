import SliderSkeleton from '..'
import { ReactNode } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'

import useSliderMediaQuery from '@/hooks/SliderMediaQuery'

import styles from './styles.module.scss'

interface Props {
  loading: boolean
  children: ReactNode
}

type brProps = {
  [width: number]: SwiperOptions
}

const breakpoints: brProps = {
  320: { slidesPerView: 2 },
  480: { slidesPerView: 3 },
  580: { slidesPerView: 4 },
  720: { slidesPerView: 5 },
  1024: { slidesPerView: 6 },
  1280: { slidesPerView: 7 }
}

const pagination = {
  clickable: true,
  renderBullet: (index: number, className: string) => {
    return `<span class="${className}">${index + 1}</span>`
  }
}

const HomeSlider: React.FC<Props> = ({ loading, children }) => {
  const perView = useSliderMediaQuery(breakpoints)

  return (
    <SliderSkeleton loading={loading} gap={16} items={perView}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={perView}
        pagination={pagination}
        navigation
        breakpoints={breakpoints}
        className={styles.books}
      >
        {children}
      </Swiper>
    </SliderSkeleton>
  )
}

export default HomeSlider
