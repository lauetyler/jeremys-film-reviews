import type { Review } from "./types"

export const reviews: Review[] = [
  {
    id: "1",
    title: "The Shawshank Redemption",
    year: 1994,
    genres: ["Drama"],
    imageUrl: "/placeholder.svg?height=450&width=300",
    rating: 5,
    reviewDate: "2023-01-15",
    fullReview: "A timeless classic that explores the human spirit...",
  },
  {
    id: "2",
    title: "Inception",
    year: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    imageUrl: "/placeholder.svg?height=450&width=300",
    rating: 4,
    reviewDate: "2023-02-20",
    fullReview: "A mind-bending journey through dreams within dreams...",
  },
  // Add more reviews here
]

export const topFilms = [
  {
    id: "1",
    title: "The Godfather",
    year: 1972,
    posterUrl: "/placeholder.svg?height=450&width=300",
  },
  {
    id: "2",
    title: "Pulp Fiction",
    year: 1994,
    posterUrl: "/placeholder.svg?height=450&width=300",
  },
  {
    id: "3",
    title: "The Dark Knight",
    year: 2008,
    posterUrl: "/placeholder.svg?height=450&width=300",
  },
]

export const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
]

