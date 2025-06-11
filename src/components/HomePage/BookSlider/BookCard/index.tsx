import HomeSlide from '../../HomeSlider/HomeSlide'

import styles from './styles.module.scss'
import { BookPreview } from '@/types/books'

type BookCardProps = {
  book: BookPreview
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const bookUrl = book.key.replace('/works/', '/book/')
  const bookImage = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`

  return (
    <HomeSlide slideUrl={bookUrl} image={{ url: bookImage, title: book.title }}>
      <h2 className={styles.title}>{book.title || 'No title'}</h2>
    </HomeSlide>
  )
}

export default BookCard
