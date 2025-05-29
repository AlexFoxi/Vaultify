'use client'

import cn from 'clsx'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import Input from '@/components/ui/Input'

import { SearchIco } from '@/assets/icons'

import styles from './styles.module.scss'

interface Search {
  search: string
}

const Search = () => {
  const t = useTranslations('header')
  const [search, setSearch] = useState<string>('')
  const [debouncedSearch, setDebouncedSearch] = useState<string>('')
  const [searchResults, setSearchResults] = useState<string[]>([])

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
    const handleSearch = ({ search }: Search) => {
      // console.log(`Category: ${category}, Search Query: ${search}`)
      if (search) {
        setSearchResults([
          `result 1 for "${search}"`,
          `result 2 for "${search}"`,
          `result 3 for "${search}"`
        ])
      } else {
        setSearchResults([])
      }
    }

    handleSearch({ search: debouncedSearch })
  }, [debouncedSearch])

  return (
    <div className={styles.searchBox}>
      <div
        className={cn(styles.search, searchResults.length > 0 && styles.show)}
      >
        <Input
          type='text'
          defaultValue={search}
          onChange={handleInput}
          placeholder={t('search')}
          variant='none'
          icon={<SearchIco />}
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
