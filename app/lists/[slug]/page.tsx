import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Rating from "@/components/rating"
import { movieLists, getReviewById } from "@/lib/data"
import type { Metadata } from "next"
import { getImagePath, getNotFoundImage } from "@/lib/utils"

interface Props {
  params: { slug: string }
}

export default function ListPage({ params }: Props) {
  const list = movieLists.find((l) => l.slug === params.slug)

  if (!list) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">{list.title}</h1>
        <p className="text-muted-foreground">{list.description}</p>
      </div>

      <div className="grid gap-6">
        {list.movies.map(({ reviewId, notes }) => {
          const review = getReviewById(reviewId)
          if (!review) return null

          return (
            <Card key={review.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={getImagePath(review.imageUrl) || getNotFoundImage()}
                      alt={`${review.title} poster`}
                      width={100}
                      height={150}
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-grow space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <Link href={`/reviews/${review.slug}`} className="text-xl font-semibold hover:underline">
                          {review.title}
                        </Link>
                        <p className="text-muted-foreground">{review.year}</p>
                      </div>
                      <Rating rating={review.rating} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {review.genres.map((genre) => (
                        <Badge key={genre} variant="secondary">
                          {genre}
                        </Badge>
                      ))}
                    </div>
                    {notes && <p className="text-muted-foreground italic">{notes}</p>}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return movieLists.map((list) => ({
    slug: list.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const list = movieLists.find((l) => l.slug === params.slug)
  if (!list) {
    notFound()
  }
  return {
    title: list.title,
    description: list.description,
  }
}

