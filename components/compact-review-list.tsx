import Link from "next/link"
import { format } from "date-fns"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Review } from "@/lib/types"

export default function CompactReviewList({ reviews }: { reviews: Review[] }) {
  const sortedReviews = [...reviews].sort((a, b) => new Date(b.reviewDate).getTime() - new Date(a.reviewDate).getTime())

  return (
    <ul className="space-y-1">
      {sortedReviews.map((review) => (
        <li key={review.id} className="text-xs">
          <Link
            href={`/reviews/${review.slug}`}
            className="flex items-center justify-between hover:bg-accent p-2 rounded transition-colors"
          >
            <div className="flex items-center space-x-2 overflow-hidden">
              <span className="font-medium truncate">{review.title}</span>
              <span className="text-muted-foreground whitespace-nowrap">({review.year})</span>
              <div className="flex items-center">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="ml-0.5">{review.rating}</span>
              </div>
              <div className="flex space-x-1 overflow-hidden">
                {review.genres.slice(0, 1).map((genre) => (
                  <Badge key={genre} variant="secondary" className="text-[0.6rem] px-1 py-0">
                    {genre}
                  </Badge>
                ))}
                {review.genres.length > 1 && (
                  <span className="text-[0.6rem] text-muted-foreground">+{review.genres.length - 1}</span>
                )}
              </div>
            </div>
            <span className="text-muted-foreground whitespace-nowrap ml-2">
              {format(new Date(review.reviewDate), "MMM d, yyyy")}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

