import type { Review } from "./types"
import type { FilmList } from "./types"

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

export const filmLists: FilmList[] = [
  {
    id: "1",
    slug: "best-sci-fi-films",
    title: "Best Science Fiction Films",
    description: "A collection of groundbreaking science fiction movies that pushed the boundaries of imagination.",
    isRanked: true,
    createdAt: "2024-01-15",
    films: [
      { filmId: "2", order: 1 }, // Inception
      { filmId: "5", order: 2 }, // The Dark Knight
    ],
  },
  {
    id: "2",
    slug: "crime-drama-essentials",
    title: "Crime Drama Essentials",
    description: "Essential viewing for fans of crime dramas - from mob epics to heist films.",
    isRanked: false,
    createdAt: "2024-02-01",
    films: [
      { filmId: "3" }, // The Godfather
      { filmId: "4" }, // Pulp Fiction
    ],
  },
]

export function getList(slug: string): FilmList | undefined {
  return filmLists.find((list) => list.slug === slug)
}

export function getFilmsInList(list: FilmList): Review[] {
  const listFilms = list.films.map((film) => reviews.find((r) => r.id === film.filmId)!)
  if (list.isRanked) {
    return listFilms.sort((a, b) => {
      const orderA = list.films.find((f) => f.filmId === a.id)?.order ?? 0
      const orderB = list.films.find((f) => f.filmId === b.id)?.order ?? 0
      return orderA - orderB
    })
  }
  return listFilms
}