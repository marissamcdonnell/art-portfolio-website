import { SITE_NAME, SITE_URL } from "~/site/site.consts"
import type { Artwork } from "../art.types"

type CollectionJsonLdArgs = {
  name: string
  description: string
  path: string
  artworks: Artwork[]
}

export const collectionJsonLd = ({ name, description, path, artworks }: CollectionJsonLdArgs) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `${name} — ${SITE_NAME}`,
  description,
  url: `${SITE_URL}${path}`,
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  hasPart: artworks.map((a) => ({
    "@type": "VisualArtwork",
    name: a.title,
    artMedium: a.medium,
    width: a.dimensions,
    dateCreated: String(a.year),
    image: a.blobUrl,
    creator: { "@type": "Person", name: SITE_NAME },
  })),
})
