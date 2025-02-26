import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { movieLists, getReviewById } from "@/lib/data"
import { getImagePath, getNotFoundImage } from "@/lib/utils"

export default function ListsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">My Film Lists</h1>
            <div className="grid gap-6">
                {movieLists.map((list) => (
                    <Link key={list.id} href={`/lists/${list.slug}`}>
                        <Card className="hover:bg-accent transition-colors">
                            <CardHeader>
                                <CardTitle>{list.title}</CardTitle>
                                <CardDescription>{list.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-2 overflow-x-auto pb-4">
                                    {list.movies.slice(0, 5).map(({ reviewId }) => {
                                        const review = getReviewById(reviewId)
                                        if (!review) return null // Skip if review doesn't exist
                                        return (
                                            <div key={reviewId} className="flex-shrink-0">
                                                <Image
                                                    src={getImagePath(review.imageUrl) || getNotFoundImage()}
                                                    alt={`${review.title} poster`}
                                                    width={100}
                                                    height={150}
                                                    className="rounded-md object-cover"
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="flex justify-between text-sm text-muted-foreground mt-4">
                                    <span>{list.movies.length} films</span>
                                    <span>Updated {format(new Date(list.updatedAt), "MMM d, yyyy")}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}

