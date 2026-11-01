import type { Route } from "./+types/_index"
import { getFeaturedArtworks } from "~/art/utils/getFeaturedArtworks"
import { CommissionCta } from "~/home/CommissionCta"
import { FeaturedWork } from "~/home/FeaturedWork"
import { Hero } from "~/home/Hero"
import { HOME_LABELS } from "~/home/home.strings"
import { seoMeta } from "~/site/seo"
import { INSTAGRAM_URL, SITE_NAME, SITE_URL } from "~/site/site.consts"

export const meta: Route.MetaFunction = ({ data }) => [
  ...seoMeta({
    title: HOME_LABELS.metaTitle,
    description: HOME_LABELS.metaDescription,
    image: data?.featured?.[0]?.blobUrl,
    path: "/",
  }),
  {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
      jobTitle: ["Artist", "Software Engineer"],
      description: HOME_LABELS.jsonLdDescription,
      sameAs: [INSTAGRAM_URL],
    },
  },
]

export const loader = () => ({ featured: getFeaturedArtworks(3) })

const Home = ({ loaderData }: Route.ComponentProps) => (
  <div>
    <Hero />
    <FeaturedWork artworks={loaderData.featured} />
    <CommissionCta />
  </div>
)

export default Home
