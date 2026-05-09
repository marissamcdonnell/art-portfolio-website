import type { Route } from "./+types/other-arts"
import { getArtworksByCategory } from "~/lib/artworks"
import { Gallery } from "~/components/gallery"
import { seoMeta, SITE_URL, SITE_NAME } from "~/lib/seo"

export const meta: Route.MetaFunction = ({ data }) => {
  const firstImage = data?.artworks?.[0]?.blobUrl
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Other Arts — Marissa McDonnell",
    description: `Watercolor, charcoal, and mixed media works by ${SITE_NAME}`,
    url: `${SITE_URL}/other-arts`,
    author: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
    hasPart: (data?.artworks ?? []).map((a) => ({
      "@type": "VisualArtwork",
      name: a.title,
      artMedium: a.medium,
      dateCreated: String(a.year),
      image: a.blobUrl,
      creator: { "@type": "Person", name: SITE_NAME },
    })),
  }

  return [
    ...seoMeta({
      title: "Other Arts",
      description: "Watercolor, charcoal, mixed media, and more — works on paper and beyond by Marissa McDonnell.",
      image: firstImage,
      path: "/other-arts",
    }),
    { "script:ld+json": jsonLd },
  ]
}

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
