import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getRecentReviews, getTopFilms } from "@/lib/data"
import { getImagePath, getNotFoundImage } from "@/lib/utils"

export default function Home() {
  const recentReviews = getRecentReviews(3)
  const topFilms = getTopFilms()

  return (
    <div className="space-y-12">
      <section className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src={getImagePath("/jeremy_profile.jpg") || getNotFoundImage()}
          alt="Jeremy's profile picture"
          width={200}
          height={200}
          className="rounded-full w-[200px] h-[200px] object-cover"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Welcome to My Film Reviews</h1>
          <p className="text-lg">
            I&apos;m a passionate film critic with a keen eye for cinematic excellence. Join me on my journey through
            the world of movies!
          </p>
          <Button asChild>
            <Link href="https://letterboxd.com/jeremylaue/" target="_blank" rel="noopener noreferrer">
              Follow me on Letterboxd
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">My Top Three Films</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topFilms.map((film) => (
            <Link
              key={film.id}
              href={`/reviews/${film.slug}`}
              className="space-y-2 block hover:opacity-75 transition-opacity"
            >
              <Image
                src={getImagePath(film.imageUrl) || getNotFoundImage()}
                alt={`${film.title} poster`}
                width={300}
                height={450}
                className="rounded-lg shadow-md"
              />
              <h3 className="text-xl font-semibold">{film.title}</h3>
              <p className="text-muted-foreground">{film.year}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recently Reviewed</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentReviews.map((review) => (
            <Link
              key={review.id}
              href={`/reviews/${review.slug}`}
              className="space-y-2 block hover:opacity-75 transition-opacity"
            >
              <Image
                src={getImagePath(review.imageUrl) || getNotFoundImage()}
                alt={`${review.title} poster`}
                width={300}
                height={450}
                className="rounded-lg shadow-md"
              />
              <h3 className="text-xl font-semibold">{review.title}</h3>
              <p className="text-muted-foreground">Reviewed on: {review.reviewDate}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-6 flex gap-4">
        <Button asChild>
          <Link href="/reviews">View All Reviews</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/lists">Browse My Lists</Link>
        </Button>
      </div>
    </div>
  )
}

