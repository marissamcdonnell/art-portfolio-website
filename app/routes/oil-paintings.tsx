import type { Route } from "./+types/oil-paintings"
import { OIL_PAINTINGS_LABELS, COLLECTION_LABELS } from "~/art/art.strings"
import { CollectionPage } from "~/art/CollectionPage"
import { collectionJsonLd } from "~/art/utils/collectionJsonLd"
import { getArtworksByCategory } from "~/art/utils/getArtworksByCategory"
import { seoMeta } from "~/site/seo"
import { SITE_NAME } from "~/site/site.consts"

const PATH = "/oil-paintings"

export const meta: Route.MetaFunction = ({ data }) => {
  const artworks = data?.artworks ?? []
  return [
    ...seoMeta({
      title: OIL_PAINTINGS_LABELS.title,
      description: OIL_PAINTINGS_LABELS.metaDescription(data?.artworks?.length ?? ""),
      image: artworks[0]?.blobUrl,
      path: PATH,
    }),
    {
      "script:ld+json": collectionJsonLd({
        name: OIL_PAINTINGS_LABELS.title,
        description: OIL_PAINTINGS_LABELS.jsonLdDescription(SITE_NAME),
        path: PATH,
        artworks,
      }),
    },
  ]
}

export const loader = () => ({ artworks: getArtworksByCategory("oil-painting") })

const OilPaintings = ({ loaderData }: Route.ComponentProps) => (
  <CollectionPage
    title={OIL_PAINTINGS_LABELS.title}
    subtitle={OIL_PAINTINGS_LABELS.subtitle(COLLECTION_LABELS.workCount(loaderData.artworks.length))}
    artworks={loaderData.artworks}
  />
)

export default OilPaintings
