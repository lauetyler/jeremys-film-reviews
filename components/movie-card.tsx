import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"
import Rating from "@/components/rating"
import type { Review } from "@/lib/types"
import { getImagePath, getNotFoundImage } from "@/lib/utils"

export default function MovieCard({ review }: { review: Review }) {
  return (
    <Link href={`/reviews/${review.slug}`} className="block hover:opacity-75 transition-opacity">
      <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative w-full pb-[133.33%]">
          {" "}
          {/* 3:4 aspect ratio */}
          <Image
            src={getImagePath(review.imageUrl) || getNotFoundImage()}
            alt={`${review.title} poster`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold line-clamp-1">{review.title}</h3>
          <p className="text-sm text-muted-foreground">{review.year}</p>
          <div className="flex flex-wrap gap-1">
            {review.genres.slice(0, 2).map((genre) => (
              <Badge key={genre} variant="secondary" className="text-xs">
                {genre}
              </Badge>
            ))}
            {review.genres.length > 2 && (
              <span className="text-xs text-muted-foreground">+{review.genres.length - 2}</span>
            )}
          </div>
          <Rating rating={review.rating} />
          <p className="text-xs text-muted-foreground">Reviewed: {format(new Date(review.reviewDate), "MMM d,s yyyy")}</p>
        </div>
      </div>
    </Link>
  )
}

