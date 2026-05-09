import type { Route } from "./+types/other-arts"
import { getArtworksByCategory } from "~/lib/artworks"
import { Gallery } from "~/components/gallery"

export const meta: Route.MetaFunction = () => [
  { title: "Other Arts — Marissa McDonnell" },
  {
    name: "description",
    content: "Browse Marissa McDonnell's other artwork — watercolor, charcoal, mixed media, and more.",
  },
]

export function loader() {
  const artworks = getArtworksByCategory("other")
  return { artworks }
}

export default function OtherArts({ loaderData }: Route.ComponentProps) {
  const { artworks } = loaderData

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-12">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Other Arts</h1>
        <p className="mt-3 text-muted-foreground">
          Watercolor, charcoal, mixed media, and more —{" "}
          {artworks.length} work{artworks.length !== 1 ? "s" : ""}
        </p>
      </div>
      <Gallery artworks={artworks} />
    </div>
  )
}
