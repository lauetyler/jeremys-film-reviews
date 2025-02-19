import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import Rating from "@/components/rating"
import { getList, getFilmsInList } from "@/lib/data"
import { getImagePath, getNotFoundImage } from "@/lib/utils"
import type { Metadata } from "next"

interface Props {
    params: { slug: string }
}

export default function ListPage({ params }: Props) {
    const list = getList(params.slug)

    if (!list) {
        notFound()
    }

    const films = getFilmsInList(list)

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">{list.title}</h1>
                <p className="text-lg text-muted-foreground">{list.description}</p>
                <p className="text-sm text-muted-foreground">
                    {films.length} films • Created on {list.createdAt}
                    {list.isRanked && " • Ranked"}
                </p>
            </div>

            <div className="space-y-4">
                {films.map((film, index) => (
                    <Link
                        key={film.id}
                        href={`/reviews/${film.slug}`}
                        className="block hover:bg-accent rounded-lg p-4 transition-colors"
                    >
                        <div className="flex gap-4">
                            {list.isRanked && (
                                <div className="flex-shrink-0 w-8 text-2xl font-bold text-muted-foreground">{index + 1}</div>
                            )}
                            <div className="flex-shrink-0">
                                <Image
                                    src={getImagePath(film.imageUrl) || getNotFoundImage()}
                                    alt={`${film.title} poster`}
                                    width={80}
                                    height={120}
                                    className="rounded-md object-cover"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-semibold">{film.title}</h3>
                                        <p className="text-muted-foreground">{film.year}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {film.genres.map((genre) => (
                                                <Badge key={genre} variant="secondary">
                                                    {genre}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <Rating rating={film.rating} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const list = getList(params.slug)
    if (!list) {
        notFound()
    }
    return {
        title: `${list.title} | My Film Reviews`,
        description: list.description,
    }
}