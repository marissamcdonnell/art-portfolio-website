const SITE_URL = "https://marissamcdonnell.com"
const SITE_NAME = "Marissa McDonnell"
const DEFAULT_DESCRIPTION =
  "Oil painter and mixed-media artist. Expressive, layered work exploring color, light, and the quiet in-between."
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`

export function seoMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
  path = "/",
  type = "website",
}: {
  title: string
  description?: string
  image?: string
  path?: string
  type?: "website" | "article"
}) {
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

export { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION }
