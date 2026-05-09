import { Link } from "react-router"
import type { Route } from "./+types/_index"
import { getFeaturedArtworks } from "~/lib/artworks"
import { ArtImage } from "~/components/art-image"
import { Button } from "~/components/ui/button"
import { ArrowRight } from "lucide-react"

export const meta: Route.MetaFunction = () => [
  { title: "Marissa McDonnell — Artist" },
  {
    name: "description",
    content:
      "Oil painter and mixed-media artist based in the United States. Expressive, layered work exploring color and light.",
  },
]

export function loader() {
  const featured = getFeaturedArtworks(3)
  return { featured }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { featured } = loaderData

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center sm:px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/40 via-background to-background" />
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Artist & Painter
        </p>
        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Marissa McDonnell
        </h1>
        <p className="mb-10 max-w-xl text-lg text-muted-foreground">
          Oil paintings and mixed media — expressive, layered work that explores
          color, light, and the quiet in-between.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/oil-paintings">
              View Oil Paintings
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/about">About Me</Link>
          </Button>
        </div>
      </section>

      {/* Featured Work */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Recent Work
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">Featured Paintings</h2>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link to="/oil-paintings">
              View all
              <ArrowRight className="ml-1.5 size-3.5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((artwork, i) => (
            <Link
              key={artwork.id}
              to="/oil-paintings"
              className="group overflow-hidden rounded-xl border border-border/50 transition-all hover:border-border hover:shadow-lg"
            >
              <ArtImage
                src={artwork.blobUrl}
                alt={artwork.alt}
                width={artwork.width}
                height={artwork.height}
                priority={i === 0}
                className="aspect-[4/5] rounded-t-xl"
              />
              <div className="p-4">
                <p className="font-medium text-foreground">{artwork.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {artwork.medium} · {artwork.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-border/40 bg-muted/30 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Interested in a piece?
          </h2>
          <p className="mb-8 text-muted-foreground">
            I take commissions and occasionally sell originals. Reach out and
            let's talk.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
