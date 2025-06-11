import { AXIOS_ANIME } from '@/api/api'
import { safeRequest } from '@/api/api.helper'

import { AnimeResponse } from '@/types/anime'

export const AnimeService = {
  async getTrending(query: string, limit: number): Promise<AnimeResponse> {
    return await safeRequest(
      () =>
        AXIOS_ANIME.get('https://api.jikan.moe/v4/top/anime', {
          params: {
            type: query, // тип (tv, movie, ova і т.д.)
            filter: 'bypopularity',
            limit: limit
          }
        }),
      []
    ).then(data => data || {})
  }
}
