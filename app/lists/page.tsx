import Link from "next/link"
import Image from "next/image"
import { filmLists, getFilmsInList } from "@/lib/data"
import { getImagePath, getNotFoundImage } from "@/lib/utils"

export default function ListsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">My Film Lists</h1>
            <div className="grid gap-6">
                {filmLists.map((list) => {
                    const films = getFilmsInList(list)
                    return (
                        <Link
                            key={list.id}
                            href={`/lists/${list.slug}`}
                            className="block hover:bg-accent rounded-lg p-4 transition-colors"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-2xl font-semibold">{list.title}</h2>
                                        <p className="text-muted-foreground">{list.description}</p>
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {films.length} films
                                        {list.isRanked && " • Ranked"}
                                    </div>
                                </div>
                                <div className="flex gap-2 overflow-hidden">
                                    {films.slice(0, 5).map((film) => (
                                        <div key={film.id} className="relative w-24 h-36 flex-shrink-0">
                                            <Image
                                                src={getImagePath(film.imageUrl) || getNotFoundImage()}
                                                alt={film.title}
                                                fill
                                                className="object-cover rounded"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}