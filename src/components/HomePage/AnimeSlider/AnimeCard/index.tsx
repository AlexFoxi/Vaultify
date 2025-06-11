import HomeSlide from '@/components/HomePage/HomeSlider/HomeSlide'

import styles from './styles.module.scss'
import { AnimePreview } from '@/types/anime'

type BookCardProps = {
  anime: AnimePreview
}

const AnimeCard: React.FC<BookCardProps> = ({ anime }) => {
  const animeUrl = `/anime/${anime.mal_id}`
  const animeImage =
    anime.images.webp?.large_image_url ?? anime.images.jpg?.large_image_url

  return (
    <>
      <HomeSlide
        slideUrl={animeUrl}
        image={{ url: animeImage, title: anime.title }}
      >
        <h2 className={styles.title}>{anime.title || 'No title'}</h2>
      </HomeSlide>
    </>
  )
}

export default AnimeCard
