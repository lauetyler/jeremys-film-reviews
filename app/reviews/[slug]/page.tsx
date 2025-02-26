import Image from "next/image"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"
import Rating from "@/components/rating"
import { reviews } from "@/lib/data"
import type { Metadata } from "next"
import { getImagePath, getNotFoundImage } from "@/lib/utils"

interface Props {
  params: { slug: string }
}

export default function ReviewPage({ params }: Props) {
  const review = reviews.find((r) => r.slug === params.slug)

  if (!review) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image
            src={getImagePath(review.imageUrl) || getNotFoundImage()}
            alt={`${review.title} poster`}
            width={300}
            height={450}
            className="rounded-lg shadow-md w-full"
          />
          <div className="mt-4 space-y-2">
            <h1 className="text-3xl font-bold">{review.title}</h1>
            <p className="text-muted-foreground">{review.year}</p>
            <div className="flex flex-wrap gap-2">
              {review.genres.map((genre) => (
                <Badge key={genre} variant="secondary">
                  {genre}
                </Badge>
              ))}
            </div>
            <p>Reviewed on: {format(new Date(review.reviewDate), "MMM d, yyyy")}</p>
            <Rating rating={review.rating} />
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Review</h2>
          <div className="prose dark:prose-invert">
            {review.fullReview.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return reviews.map((review) => ({
    slug: review.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const review = reviews.find((r) => r.slug === params.slug)
  if (!review) {
    notFound()
  }
  return {
    title: review.title,
    description: `Review of ${review.title}`,
  }
}

