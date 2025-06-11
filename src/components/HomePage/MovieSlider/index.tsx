'use client'

import { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'

import HomeSlider from '../HomeSlider'

import MoviesCard from './MoviesCard'
import localData from './data.json'
import styles from './styles.module.scss'
import { Movie } from '@/types/movies'

const MovieSlider = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      // const data = await MoviesService.getPerPage('movie', 1, 'uk-UA')
      const data = localData

      setMovies(data.results)
      setLoading(false)
    }

    fetchMovies()
  }, [])

  return (
    <HomeSlider loading={loading}>
      {movies.map(movie => (
        <SwiperSlide key={movie.id}>
          <MoviesCard movie={movie} />
        </SwiperSlide>
      ))}
    </HomeSlider>
  )
}

export default MovieSlider
