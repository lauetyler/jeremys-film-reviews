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
}

export interface TopFilm {
  id: string
  title: string
  year: number
  posterUrl: string
  slug: string
}

