import BookSlider from './BookSlider'
import styles from './styles.module.scss'

const Home = () => {
  return (
    <div className='container'>
      <article className={styles.block}>
        <h1 className={styles.title}>Trending Books</h1>
        <BookSlider />
      </article>
    </div>
  )
}

export default Home
