import type { Route } from "./+types/oil-paintings"
import { getArtworksByCategory } from "~/lib/artworks"
import { Gallery } from "~/components/gallery"

export const meta: Route.MetaFunction = () => [
  { title: "Oil Paintings — Marissa McDonnell" },
  {
    name: "description",
    content: "Browse Marissa McDonnell's collection of original oil paintings.",
  },
]

export function loader() {
  const artworks = getArtworksByCategory("oil-painting")
  return { artworks }
}

export default function OilPaintings({ loaderData }: Route.ComponentProps) {
  const { artworks } = loaderData

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-12">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Oil Paintings</h1>
        <p className="mt-3 text-muted-foreground">
          {artworks.length} work{artworks.length !== 1 ? "s" : ""} — click any to view full size
        </p>
      </div>
      <Gallery artworks={artworks} />
    </div>
  )
}
