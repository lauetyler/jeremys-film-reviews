"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LayoutGrid, List, AlignLeft } from "lucide-react"
import MovieCard from "@/components/movie-card"
import ReviewListItem from "@/components/review-list-item"
import CompactReviewList from "@/components/compact-review-list"
import { Pagination } from "@/components/pagination"
import { reviews, genres } from "@/lib/data"

type ViewMode = "grid" | "list" | "compact"

const ITEMS_PER_PAGE = {
  grid: 12,
  list: 10,
  compact: 20,
}

export default function Reviews() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>("list")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredReviews = useMemo(() => {
    return reviews.filter((review) => {
      const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesGenre = selectedGenres.length === 0 || review.genres.some((genre) => selectedGenres.includes(genre))
      return matchesSearch && matchesGenre
    })
  }, [searchTerm, selectedGenres])

  const totalPages = Math.ceil(filteredReviews.length / ITEMS_PER_PAGE[viewMode])
  const paginatedReviews = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE[viewMode]
    return filteredReviews.slice(startIndex, startIndex + ITEMS_PER_PAGE[viewMode])
  }, [filteredReviews, currentPage, viewMode])

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]))
    setCurrentPage(1) // Reset to first page when changing filters
  }

  const clearGenres = () => {
    setSelectedGenres([])
    setCurrentPage(1) // Reset to first page when clearing filters
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo(0, 0) // Scroll to top when changing pages
  }

  const handleViewModeChange = (newMode: ViewMode) => {
    setViewMode(newMode)
    setCurrentPage(1) // Reset to first page when changing view mode
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Movie Reviews</h1>
        <div className="flex space-x-2">
          <Button
            variant={viewMode === "compact" ? "default" : "outline"}
            size="icon"
            onClick={() => handleViewModeChange("compact")}
            aria-label="Compact view"
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => handleViewModeChange("list")}
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => handleViewModeChange("grid")}
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
        onChange={(e) => {
          setSearchTerm(e.target.value)
          setCurrentPage(1) // Reset to first page when searching
        }}
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
              Clear Filters
            </Button>
          )}
        </div>
        <div className="h-6">
          {selectedGenres.length === 0 && <p className="text-sm text-muted-foreground">Showing all genres</p>}
        </div>
      </div>

      {filteredReviews.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl font-semibold text-muted-foreground">No matching movies found</p>
          <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <>
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedReviews.map((review) => (
                <MovieCard key={review.id} review={review} />
              ))}
            </div>
          )}

          {viewMode === "list" && (
            <div className="space-y-4">
              {paginatedReviews.map((review) => (
                <ReviewListItem key={review.id} review={review} />
              ))}
            </div>
          )}

          {viewMode === "compact" && (
            <div className="border rounded-lg shadow-sm bg-card">
              <CompactReviewList reviews={paginatedReviews} />
            </div>
          )}

          {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          )}
        </>
      )}
    </div>
  )
}

