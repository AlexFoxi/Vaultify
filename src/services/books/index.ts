import { AXIOS_BOOKS } from '@/api/api'
import { safeRequest } from '@/api/api.helper'

import { Work } from '@/types/books'

export const BookService = {
  async searchPerPage(query: string, page = 1): Promise<Work[]> {
    return await safeRequest(
      () =>
        AXIOS_BOOKS.get('/search.json', {
          params: { q: query, page }
        }),
      []
    ).then(data => data.docs || [])
  },

  async getTrendingBySubject(
    subject: string,
    limit = 10,
    offset = 0
  ): Promise<Work[]> {
    return await safeRequest(
      () =>
        AXIOS_BOOKS.get(`/subjects/${encodeURIComponent(subject)}.json`, {
          params: { limit, offset, ebooks: true },
          timeout: 2000
        }),
      []
    ).then(data => data.works || [])
  }
}
