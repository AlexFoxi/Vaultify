export type AnimePreview = Pick<Anime, 'mal_id' | 'images' | 'title'>

export interface AnimeResponse {
  pagination: {
    last_visible_page: number
    has_next_page: boolean
    current_page: number
    items: {
      count: number
      total: number
      per_page: number
    }
  }
  data: Anime[]
}

export interface Anime {
  mal_id: number
  url: string
  images: {
    jpg: ImageFormat
    webp: ImageFormat
  }
  trailer: Trailer
  approved: boolean
  titles: {
    type: string
    title: string
  }[]
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: string[]
  type: string
  source: string
  episodes: number
  status: string
  airing: boolean
  aired: {
    from: string
    to: string
    prop: {
      from: DateParts
      to: DateParts
    }
    string: string
  }
  duration: string
  rating: string
  score: number
  scored_by: number
  rank: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background: string
  season: string
  year: number
  broadcast: {
    day: string
    time: string
    timezone: string
    string: string
  }
  producers: Entity[]
  licensors: Entity[]
  studios: Entity[]
  genres: Genre[]
  explicit_genres: Genre[]
  themes: Genre[]
  demographics: Genre[]
}

interface ImageFormat {
  image_url: string
  small_image_url: string
  large_image_url: string
}

interface Trailer {
  youtube_id: string | null
  url: string | null
  embed_url: string | null
  images: {
    image_url: string | null
    small_image_url: string | null
    medium_image_url: string | null
    large_image_url: string | null
    maximum_image_url: string | null
  }
}

interface DateParts {
  day: number
  month: number
  year: number
}

interface Entity {
  mal_id: number
  type: string
  name: string
  url: string
}

interface Genre {
  mal_id: number
  type: string
  name: string
  url: string
}
