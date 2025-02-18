import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Rating from "@/components/rating"
import type { Review } from "@/lib/types"

export default function MovieCard({ review }: { review: Review }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={review.imageUrl || "./images/not_found.jpg"}
        alt={`${review.title} poster`}
        width={300}
        height={450}
        className="w-full object-cover h-64"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{review.title}</h3>
        <p className="text-muted-foreground">{review.year}</p>
        <div className="flex flex-wrap gap-2">
          {review.genres.slice(0, 3).map((genre) => (
            <Badge key={genre} variant="secondary">
              {genre}
            </Badge>
          ))}
        </div>
        <p className="text-sm">Reviewed on: {review.reviewDate}</p>
        <Rating rating={review.rating} />
      </div>
    </div>
  )
}

