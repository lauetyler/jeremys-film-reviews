export interface Review {
  id: string
  slug: string
  title: string
  year: number
  genres: string[]
  imageUrl: string
  rating: number
  reviewDate: string
  fullReview: string
  isTopFilm: boolean
}

export interface FilmList {
  id: string
  slug: string
  title: string
  description: string
  isRanked: boolean
  createdAt: string
  films: {
    filmId: string
    order?: number // Only present if isRanked is true
  }[]
}