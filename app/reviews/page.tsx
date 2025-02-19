"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LayoutGrid, List, AlignLeft, X } from "lucide-react"
import MovieCard from "@/components/movie-card"
import ReviewListItem from "@/components/review-list-item"
import CompactReviewList from "@/components/compact-review-list"
import { reviews, genres } from "@/lib/data"

type ViewMode = "grid" | "list" | "compact"

export default function Reviews() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>("list")

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenres.length === 0 || review.genres.some((genre) => selectedGenres.includes(genre))
    return matchesSearch && matchesGenre
  })

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]))
  }

  const clearGenres = () => {
    setSelectedGenres([])
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Movie Reviews</h1>
        <div className="flex space-x-2">
          <Button
            variant={viewMode === "compact" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("compact")}
            aria-label="Compact view"
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
            aria-label="Grid view"
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Input
        type="search"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Genres</h2>
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
          {selectedGenres.length > 0 && (
            <Button variant="outline" size="sm" onClick={clearGenres}>
              <X className="h-4 w-4 mr-1" />
              Clear Filters
            </Button>
          )}
        </div>
        <div className="h-6">
          {selectedGenres.length === 0 && <p className="text-sm text-muted-foreground">Showing all genres</p>}
        </div>
      </div>

      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <MovieCard key={review.id} review={review} />
          ))}
        </div>
      )}

      {viewMode === "list" && (
        <div className="space-y-4">
          {filteredReviews.map((review) => (
            <ReviewListItem key={review.id} review={review} />
          ))}
        </div>
      )}

      {viewMode === "compact" && (
        <div className="border rounded-lg shadow-sm bg-card max-h-[70vh] overflow-y-auto">
          <CompactReviewList reviews={filteredReviews} />
        </div>
      )}
    </div>
  )
}

