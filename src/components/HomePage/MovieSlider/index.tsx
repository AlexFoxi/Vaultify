'use client'

import { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'

import SliderSkeleton from '@/components/SliderSkeleton'

import useSliderMediaQuery from '@/hooks/SliderMediaQuery'

import MoviesCard from './MoviesCard'
import localData from './data.json'
import styles from './styles.module.scss'
import { MoviesService } from '@/services/movies'
import { Movie } from '@/types/movies'

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

const MovieSlider = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const perView = useSliderMediaQuery(breakpoints)

  useEffect(() => {
    const fetchMovies = async () => {
      // const data = await MoviesService.getPerPage('movie', 1, 'uk-UA')
      const data = localData
      console.log(data.results, 'results')

      setMovies(data.results)
      setLoading(false)
    }

    fetchMovies()
  }, [])

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}">${index + 1}</span>`
    }
  }

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
        {movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <MoviesCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderSkeleton>
  )
}

export default MovieSlider
