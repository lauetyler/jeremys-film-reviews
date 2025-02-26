import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"
import Rating from "@/components/rating"
import type { Review } from "@/lib/types"
import { getImagePath } from "@/lib/utils"

export default function ReviewListItem({ review }: { review: Review }) {
  return (
    <Link href={`/reviews/${review.slug}`} className="block hover:bg-accent rounded-lg p-4 transition-colors">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <Image
            src={getImagePath(review.imageUrl) || "/placeholder.svg"}
            alt={`${review.title} poster`}
            width={80}
            height={120}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">{review.title}</h3>
              <p className="text-muted-foreground">{review.year}</p>
              <div className="flex flex-wrap gap-2">
                {review.genres.map((genre) => (
                  <Badge key={genre} variant="secondary">
                    {genre}
                  </Badge>
                ))}
              </div>
              <p className="text-sm">Reviewed on: {format(new Date(review.reviewDate), "MMM d, yyyy")}</p>
            </div>
            <Rating rating={review.rating} />
          </div>
        </div>
      </div>
    </Link>
  )
}

