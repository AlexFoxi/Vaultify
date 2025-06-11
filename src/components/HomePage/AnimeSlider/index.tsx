'use client'

import { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'

import HomeSlider from '@/components/SliderSkeleton/HomeSlider'

import AnimeCard from './AnimeCard'
import localData from './data.json'
import styles from './styles.module.scss'
import { AnimeService } from '@/services/anime'
import { Anime } from '@/types/anime'

const AnimeSlider = () => {
  const [anime, setAnime] = useState<Anime[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      // const data = await AnimeService.getTrending('tv', 10)
      const data = localData

      setAnime(data.data)
      setLoading(false)
    }

    fetchBooks()
  }, [])

  return (
    <HomeSlider loading={loading}>
      {anime.map(anim => (
        <SwiperSlide key={anim.mal_id}>
          <AnimeCard anime={anim} />
        </SwiperSlide>
      ))}
    </HomeSlider>
  )
}

export default AnimeSlider
