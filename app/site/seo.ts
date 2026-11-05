import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./site.consts"
import { SITE_LABELS } from "./site.strings"

export const seoMeta = ({
  title,
  description = SITE_LABELS.defaultDescription,
  image = DEFAULT_OG_IMAGE,
  path = "/",
  type = "website",
}: {
  title: string
  description?: string
  image?: string
  path?: string
  type?: "website" | "article"
}) => {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`
  const url = `${SITE_URL}${path}`

  return [
    { title: fullTitle },
    { name: "description", content: description },

    // Canonical
    { tagName: "link", rel: "canonical", href: url },

    // Open Graph
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_US" },

    // Twitter / X
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ]
}

