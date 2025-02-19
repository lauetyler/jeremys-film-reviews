import type { Review } from "./types"
import type { MovieList } from "./types"

export const reviews: Review[] = [
  {
    id: "1",
    slug: "the-shawshank-redemption",
    title: "The Shawshank Redemption",
    year: 1994,
    genres: ["Drama"],
    imageUrl: "/movies/the_shawshank_redemption.jpg?height=450&width=300",
    rating: 5,
    reviewDate: "2023-05-15",
    fullReview: "A timeless classic that explores the human spirit...",
    isTopFilm: false,
  },
  {
    id: "2",
    slug: "inception",
    title: "Inception",
    year: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    imageUrl: "/movies/inception.jpg?height=450&width=300",
    rating: 4,
    reviewDate: "2023-06-20",
    fullReview: "A mind-bending journey through dreams within dreams...",
    isTopFilm: false,
  },
  {
    id: "3",
    slug: "the-godfather",
    title: "The Godfather",
    year: 1972,
    genres: ["Drama", "Crime"],
    imageUrl: "/movies/the_godfather.jpg?height=450&width=300",
    rating: 5,
    reviewDate: "2023-04-10",
    fullReview: "An epic tale of family, power, and the American dream...",
    isTopFilm: true,
  },
  {
    id: "4",
    slug: "pulp-fiction",
    title: "Pulp Fiction",
    year: 1994,
    genres: ["Drama", "Crime"],
    imageUrl: "/movies/pulp_fiction.jpg?height=450&width=300",
    rating: 5,
    reviewDate: "2023-07-05",
    fullReview: "A groundbreaking masterpiece of nonlinear storytelling...",
    isTopFilm: true,
  },
  {
    id: "5",
    slug: "the-dark-knight",
    title: "The Dark Knight",
    year: 2008,
    genres: ["Action", "Crime", "Drama"],
    imageUrl: "/movies/the_dark_knight.jpg?height=450&width=300",
    rating: 5,
    reviewDate: "2023-03-18",
    fullReview: "A gripping superhero epic that transcends its genre...",
    isTopFilm: true,
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

export const getRecentReviews = (count: number): Review[] => {
  return [...reviews]
    .sort((a, b) => new Date(b.reviewDate).getTime() - new Date(a.reviewDate).getTime())
    .slice(0, count)
}

export const getTopFilms = (): Review[] => {
  return reviews.filter((review) => review.isTopFilm)
}

export const movieLists: MovieList[] = [
  {
    id: "1",
    slug: "best-of-2023",
    title: "Best Films of 2023",
    description: "My personal selection of the finest films released in 2023, ranked in order of preference.",
    isRanked: true,
    movies: [
      {
        review: reviews[0],
        notes: "A masterful creation that left me speechless",
        rank: 1,
      },
      {
        review: reviews[1],
        notes: "Innovative storytelling at its finest",
        rank: 2,
      },
      // Add more movies as needed
    ],
    createdAt: "2023-12-31",
    updatedAt: "2024-01-15",
  },
  {
    id: "2",
    slug: "science-fiction-essentials",
    title: "Science Fiction Essentials",
    description: "A collection of must-watch science fiction films that have shaped the genre.",
    isRanked: false,
    movies: [
      {
        review: reviews[1],
        notes: "A mind-bending exploration of dreams and reality",
      },
      // Add more movies as needed
    ],
    createdAt: "2023-11-15",
    updatedAt: "2024-01-20",
  },
]

