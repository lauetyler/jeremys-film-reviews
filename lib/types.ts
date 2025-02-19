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

export interface MovieList {
  id: string
  slug: string
  title: string
  description: string
  isRanked: boolean
  movies: {
    review: Review
    notes?: string
    rank?: number
  }[]
  createdAt: string
  updatedAt: string
}

