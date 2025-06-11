import HomeSlide from '../../HomeSlider/HomeSlide'

import styles from './styles.module.scss'
import { Movie } from '@/types/movies'

type BookCardProps = {
  movie: Movie
}

const MoviesCard: React.FC<BookCardProps> = ({ movie }) => {
  const movieUrl = `/movie/${movie.id}`
  const posterUrl = `https://image.tmdb.org/t/p/w342${movie.poster_path}` // w92, w154, w185, w342, w500, w780, original

  return (
    <HomeSlide
      slideUrl={movieUrl}
      image={{ url: posterUrl, title: movie.title }}
    >
      <h2 className={styles.title}>{movie.title || 'No title'}</h2>
    </HomeSlide>
  )
}

export default MoviesCard
