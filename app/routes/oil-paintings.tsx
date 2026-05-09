import type { Route } from "./+types/oil-paintings"
import { getArtworksByCategory } from "~/lib/artworks"
import { Gallery } from "~/components/gallery"
import { seoMeta, SITE_URL, SITE_NAME } from "~/lib/seo"

export const meta: Route.MetaFunction = ({ data }) => {
  const firstImage = data?.artworks?.[0]?.blobUrl
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Oil Paintings — Marissa McDonnell",
    description: `Original oil paintings by ${SITE_NAME}`,
    url: `${SITE_URL}/oil-paintings`,
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
    hasPart: (data?.artworks ?? []).map((a) => ({
      "@type": "VisualArtwork",
      name: a.title,
      artMedium: a.medium,
      width: a.dimensions,
      dateCreated: String(a.year),
      image: a.blobUrl,
      creator: { "@type": "Person", name: SITE_NAME },
    })),
  }

  return [
    ...seoMeta({
      title: "Oil Paintings",
      description: `A collection of ${data?.artworks?.length ?? ""} original oil paintings by Marissa McDonnell. Expressive, layered work on canvas and linen.`,
      image: firstImage,
      path: "/oil-paintings",
    }),
    {
      "script:ld+json": jsonLd,
    },
  ]
}

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
