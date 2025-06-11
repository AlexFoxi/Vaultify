import { Link } from 'i18n/navigation'

import CustomImage from '@/components/ui/Image'

import styles from './styles.module.scss'
import { Anime } from '@/types/anime'

type BookCardProps = {
  anime: Anime
}

const AnimeCard: React.FC<BookCardProps> = ({ anime }) => {
  const animeUrl = `/anime/${anime.mal_id}`
  const animeImage =
    anime.images.webp?.large_image_url ?? anime.images.jpg?.large_image_url

  return (
    <>
      <Link href={animeUrl} className={styles.image}>
        {anime.images && (
          <CustomImage
            src={animeImage}
            width={148}
            height={210}
            alt={anime.title}
          />
        )}
      </Link>
      <div className={styles.about}>
        <Link href={animeUrl}>
          <h2 className={styles.title}>{anime.title || 'No title'}</h2>
        </Link>
      </div>
    </>
  )
}

export default AnimeCard
