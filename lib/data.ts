import type { Review } from "./types"

export const reviews: Review[] = [
  {
    id: "1",
    slug: "the-shawshank-redemption",
    title: "The Shawshank Redemption",
    year: 1994,
    genres: ["Drama"],
    imageUrl: "./images/movies/the_shawshank_redemption.jpg?height=450&width=300",
    rating: 5,
    reviewDate: "2023-01-15",
    fullReview: "A timeless classic that explores the human spirit...",
  },
  {
    id: "2",
    slug: "inception",
    title: "Inception",
    year: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    imageUrl: "./images/movies/inception.jpg?height=450&width=300",
    rating: 4,
    reviewDate: "2023-02-20",
    fullReview: "A mind-bending journey through dreams within dreams...",
  },
  {
    id: "3",
    slug: "the-godfather",
    title: "The Godfather",
    year: 1972,
    genres: ["Drama", "Crime"],
    imageUrl: "./images/movies/the_godfather.jpg?height=450&width=300",
    rating: 4,
    reviewDate: "2023-02-20",
    fullReview: "The godfather...",
  },
  {
    id: "4",
    slug: "pulp-fiction",
    title: "Pulp Fiction",
    year: 1994,
    genres: ["Drama", "Crime"],
    imageUrl: "./images/movies/pulp_fiction.jpg?height=450&width=300",
    rating: 4,
    reviewDate: "2023-02-20",
    fullReview: "Pulp fiction...",
  },
  {
    id: "5",
    slug: "the-dark-knight",
    title: "The Dark Knight",
    year: 2008,
    genres: ["Drama", "Crime"],
    imageUrl: "./images/movies/the_dark_knight.jpg?height=450&width=300",
    rating: 4,
    reviewDate: "2023-02-20",
    fullReview: "Pulp fiction...",
  }
  // Add more reviews here
]

export const topFilms = [
  {
    id: "1",
    title: "The Godfather",
    year: 1972,
    posterUrl: "./images/movies/the_godfather.jpg?height=450&width=300",
  },
  {
    id: "2",
    title: "Pulp Fiction",
    year: 1994,
    posterUrl: "./images/movies/pulp_fiction.jpg?height=450&width=300",
  },
  {
    id: "3",
    title: "The Dark Knight",
    year: 2008,
    posterUrl: "./images/movies/the_dark_knight.jpg?height=450&width=300",
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

