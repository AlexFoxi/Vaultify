'use client'

import cn from 'clsx'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import Input from '@/components/ui/Input'

import Select from '@/ui/Select'

import styles from './styles.module.scss'

type Options = {
  id: number
  name: 'films' | 'anime' | 'books'
}

type Category = 'films' | 'anime' | 'books' | null

interface Search {
  category: Category
  search: string
}

const CategoryData: Options[] = [
  { id: 1, name: 'books' },
  { id: 2, name: 'films' },
  { id: 3, name: 'anime' }
]

const Search = () => {
  const t = useTranslations('header')
  const [category, setCategory] = useState<Category>(null)
  const [search, setSearch] = useState<string>('')
  const [debouncedSearch, setDebouncedSearch] = useState<string>('')
  const [searchResults, setSearchResults] = useState<string[]>([])

  const handleSelect = (opt: Options) => {
    setCategory(opt.name)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 200)

    return () => clearTimeout(timer)
  }, [search])

  useEffect(() => {
    const handleSearch = ({ category, search }: Search) => {
      // console.log(`Category: ${category}, Search Query: ${search}`)
      if (category && search) {
        setSearchResults([
          `${category} result 1 for "${search}"`,
          `${category} result 2 for "${search}"`,
          `${category} result 3 for "${search}"`
        ])
      } else {
        setSearchResults([])
      }
    }

    handleSearch({ category, search: debouncedSearch })
  }, [category, debouncedSearch])

  return (
    <div className={styles.searchBox}>
      <div className={styles.search}>
        <Select
          selectedVal={category}
          list={CategoryData}
          placeholder={t('category')}
          setSelect={handleSelect}
          variant='none'
          translationKey='header'
        />
        <Input
          type='text'
          defaultValue={search}
          onChange={handleInput}
          placeholder={t('search')}
          variant='none'
        />
      </div>
      <div
        className={cn(
          styles.searchRes,
          searchResults.length > 0 && styles.show
        )}
      >
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <div key={index} className={styles.resultItem}>
              {result}
            </div>
          ))
        ) : (
          <div className={styles.noResults}>{t('noRes')}</div>
        )}
      </div>
    </div>
  )
}

export default Search
