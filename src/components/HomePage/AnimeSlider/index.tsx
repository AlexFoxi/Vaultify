'use client'

import { memo, useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'

import SliderSkeleton from '@/components/SliderSkeleton'

import useSliderMediaQuery from '@/hooks/SliderMediaQuery'

import AnimeCard from './AnimeCard'
import localData from './data.json'
import styles from './styles.module.scss'
import { AnimeService } from '@/services/anime'
import { Anime } from '@/types/anime'

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

const AnimeSlider = () => {
  const [anime, setAnime] = useState<Anime[]>([])
  const [loading, setLoading] = useState(true)
  const perView = useSliderMediaQuery(breakpoints)

  useEffect(() => {
    const fetchBooks = async () => {
      // const data = await AnimeService.getTrending('tv', 10)
      const data = localData

      setAnime(data.data)
      setLoading(false)
    }

    fetchBooks()
  }, [])

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}">${index + 1}</span>`
    }
  }

  return (
    <>
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
          {anime.map(anim => (
            <SwiperSlide key={anim.mal_id}>
              <AnimeCard anime={anim} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderSkeleton>
    </>
  )
}

export default AnimeSlider
