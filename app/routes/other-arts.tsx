import type { Route } from "./+types/other-arts"
import { OTHER_ARTS_LABELS, COLLECTION_LABELS } from "~/art/art.strings"
import { CollectionPage } from "~/art/CollectionPage"
import { collectionJsonLd } from "~/art/utils/collectionJsonLd"
import { getArtworksByCategory } from "~/art/utils/getArtworksByCategory"
import { seoMeta } from "~/site/seo"
import { SITE_NAME } from "~/site/site.consts"

const PATH = "/other-arts"

export const meta: Route.MetaFunction = ({ data }) => {
  const artworks = data?.artworks ?? []
  return [
    ...seoMeta({
      title: OTHER_ARTS_LABELS.title,
      description: OTHER_ARTS_LABELS.metaDescription,
      image: artworks[0]?.blobUrl,
      path: PATH,
    }),
    {
      "script:ld+json": collectionJsonLd({
        name: OTHER_ARTS_LABELS.title,
        description: OTHER_ARTS_LABELS.jsonLdDescription(SITE_NAME),
        path: PATH,
        artworks,
      }),
    },
  ]
}

export const loader = () => ({ artworks: getArtworksByCategory("other") })

const OtherArts = ({ loaderData }: Route.ComponentProps) => (
  <CollectionPage
    title={OTHER_ARTS_LABELS.title}
    subtitle={OTHER_ARTS_LABELS.subtitle(COLLECTION_LABELS.workCount(loaderData.artworks.length))}
    artworks={loaderData.artworks}
  />
)

export default OtherArts
