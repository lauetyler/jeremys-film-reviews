import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { topFilms } from "@/lib/data"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="./images/jeremy_profile.jpg"
          alt="Jeremy's profile picture"
          width={200}
          height={200}
            className="rounded-full w-[200px] h-[200px] object-cover"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Welcome to My Film Reviews</h1>
          <p className="text-lg">
            I&apos;m a passionate film critic with a keen eye for cinematic excellence. Join me on my journey through the
            world of movies!
          </p>
          <Button asChild>
            <Link href="https://letterboxd.com/jeremylaue" target="_blank" rel="noopener noreferrer">
              Follow me on Letterboxd
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">My Top Three Films</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topFilms.map((film) => (
            <div key={film.id} className="space-y-2">
              <Image
                src={film.posterUrl || "./images/not_found.jpg"}
                alt={`${film.title} poster`}
                width={300}
                height={450}
                className="rounded-lg shadow-md"
              />
              <h3 className="text-xl font-semibold">{film.title}</h3>
              <p className="text-muted-foreground">{film.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

