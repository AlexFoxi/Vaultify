'use client'

import { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'

import HomeSlider from '@/components/SliderSkeleton/HomeSlider'

import BookCard from './BookCard'
import localData from './data.json'
import styles from './styles.module.scss'
import { Work } from '@/types/books'

const BookSlider = () => {
  const [books, setBooks] = useState<Work[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      // const data = await BookService.getTrendingBySubject('fantasy', 10)
      const data = localData

      setBooks(data)
      setLoading(false)
    }

    fetchBooks()
  }, [])

  return (
    <HomeSlider loading={loading}>
      {books.map(book => (
        <SwiperSlide key={book.key}>
          <BookCard book={book} />
        </SwiperSlide>
      ))}
    </HomeSlider>
  )
}

export default BookSlider
