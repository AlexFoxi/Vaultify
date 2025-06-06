import { Link } from 'i18n/navigation'

import CustomImage from '@/components/ui/Image'

import styles from './styles.module.scss'
import { Work } from '@/types/books'

type BookCardProps = {
  book: Work
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const bookUrl = book.key.replace('/works/', '/book/')

  return (
    <>
      <Link href={bookUrl} className={styles.image}>
        {book.cover_id && (
          <CustomImage
            src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
            width={148}
            height={210}
            alt={book.title}
          />
        )}
      </Link>
      <div className={styles.about}>
        <Link href={bookUrl}>
          <h2 className={styles.title}>{book.title || 'No title'}</h2>
        </Link>

        <p className={styles.author}>
          Authors:{' '}
          <span>
            {book.authors?.map(author => author.name).join(', ') ||
              'Unknown author'}
          </span>
        </p>
      </div>
    </>
  )
}

export default BookCard
