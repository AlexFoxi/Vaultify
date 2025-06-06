'use client'

import { useEffect, useState } from 'react'
import { Navigation, Pagination, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import BookCard from './BookCard'
import styles from './styles.module.scss'
import { BookService } from '@/services/books'
import { Work } from '@/types/books'

const Home = () => {
  const [books, setBooks] = useState<Work[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await BookService.getTrendingBySubject('fantasy', 5)
      setBooks(data)
    }

    fetchBooks()
  }, [])

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return '<span class="' + className + '">' + (index + 1) + '</span>'
    }
  }

  return (
    <div className='container'>
      <article className={styles.block}>
        <h1 className={styles.title}>Trending Books</h1>
        {books.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={5}
            pagination={pagination}
            navigation
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              580: { slidesPerView: 4 },
              720: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 7 }
            }}
            className={styles.books}
          >
            {books.map(book => (
              <SwiperSlide key={book.key}>
                <BookCard book={book} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div>No data received</div>
        )}
      </article>
    </div>
  )
}

export default Home
