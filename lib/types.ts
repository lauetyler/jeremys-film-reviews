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
  movies: {
    reviewId: string
    notes?: string
  }[]
  createdAt: string
  updatedAt: string
}

