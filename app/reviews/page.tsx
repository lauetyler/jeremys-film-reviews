"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import MovieCard from "@/components/movie-card"
import { reviews, genres } from "@/lib/data"

export default function Reviews() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenres.length === 0 || review.genres.some((genre) => selectedGenres.includes(genre))
    return matchesSearch && matchesGenre
  })

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Movie Reviews</h1>

      <Input
        type="search"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <Button
            key={genre}
            variant={selectedGenres.includes(genre) ? "secondary" : "outline"}
            size="sm"
            onClick={() => toggleGenre(genre)}
          >
            {genre}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review) => (
          <Link key={review.id} href={`/reviews/${review.id}`}>
            <MovieCard review={review} />
          </Link>
        ))}
      </div>
    </div>
  )
}

