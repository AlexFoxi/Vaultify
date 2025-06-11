import { AXIOS_MOVIES } from '@/api/api'
import { safeRequest } from '@/api/api.helper'

import { MoviesResponse } from '@/types/movies'

export const MoviesService = {
  async getPerPage(
    query: 'movie' | 'tv',
    page = 1,
    lang = 'uk-UA'
  ): Promise<MoviesResponse> {
    return await safeRequest(
      () =>
        AXIOS_MOVIES.get(`/3/discover/${query}`, {
          params: {
            api_key: process.env.NEXT_PUBLIC_MOVIES_API_Key,
            language: lang, //uk-UA or en-US
            sort_by: 'popularity.desc',
            page: page
          }
        }),
      []
    ).then(res => res)
  }
}
