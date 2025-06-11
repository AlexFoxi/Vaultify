export type BookPreview = Pick<Book, 'key' | 'title' | 'cover_id'>

export interface Author {
  key: string
  name: string
}

export interface Book {
  key: string
  title: string
  authors: Author[]
  cover_id?: number
  cover_edition_key?: string
  first_publish_year?: number
  subject?: string[]
}

export interface SubjectResponse {
  key: string
  name: string
  subject_type: string
  work_count: number
  works: Book[]
}
