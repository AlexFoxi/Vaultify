import BookSlider from './BookSlider'
import MovieSlider from './MovieSlider'
import styles from './styles.module.scss'

const Home = () => {
  return (
    <div className='container'>
      <article className={styles.block}>
        <h1 className={styles.title}>Trending Books</h1>
        <BookSlider />
      </article>
      <article className={styles.block}>
        <h1 className={styles.title}>Trending Books</h1>
        <MovieSlider />
      </article>
    </div>
  )
}

export default Home
