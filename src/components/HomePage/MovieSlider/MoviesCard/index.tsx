import { Link } from 'i18n/navigation'

import CustomImage from '@/components/ui/Image'

import styles from './styles.module.scss'
import { Movie } from '@/types/movies'

type BookCardProps = {
  movie: Movie
}

const MoviesCard: React.FC<BookCardProps> = ({ movie }) => {
  const movieUrl = `/movie/${movie.id}`
  const posterUrl = `https://image.tmdb.org/t/p/w342${movie.poster_path}` // w92, w154, w185, w342, w500, w780, original

  return (
    <>
      <Link href={movieUrl} className={styles.image}>
        {movie.poster_path && (
          <CustomImage
            src={posterUrl}
            width={148}
            height={210}
            alt={movie.title}
          />
        )}
      </Link>
      <div className={styles.about}>
        <Link href={movieUrl}>
          <h2 className={styles.title}>{movie.title || 'No title'}</h2>
        </Link>
      </div>
    </>
  )
}

export default MoviesCard
