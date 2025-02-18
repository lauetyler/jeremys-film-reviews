import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import Rating from "@/components/rating"
import { reviews } from "@/lib/data"
import type { Metadata } from "next"
import { getImagePath } from "@/lib/utils"

interface Props {
    params: { slug: string }
}

export default function ReviewPage({ params }: Props) {
    const review = reviews.find((r) => r.slug === params.slug)

    if (!review) {
        notFound()
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
                <Image
                    //   src={review.imageUrl || "./images/not_found.jpg"}
                    src={getImagePath(review.imageUrl) || "./not_found.jpg"}
                    alt={`${review.title} poster`}
                    width={300}
                    height={450}
                    className="rounded-lg shadow-md"
                />
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{review.title}</h1>
                    <p className="text-muted-foreground">{review.year}</p>
                    <div className="flex flex-wrap gap-2">
                        {review.genres.map((genre) => (
                            <Badge key={genre} variant="secondary">
                                {genre}
                            </Badge>
                        ))}
                    </div>
                    <p>Reviewed on: {review.reviewDate}</p>
                    <Rating rating={review.rating} />
                </div>
            </div>
            <div className="prose dark:prose-invert max-w-none">
                {review.fullReview.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
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
        title: `My Film Reviews - ${review.title}`,
        description: `Review of ${review.title}`,
    }
}

