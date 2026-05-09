import type { Route } from "./+types/robots[.txt]"
import { SITE_URL } from "~/lib/seo"

export function loader(_: Route.LoaderArgs) {
  const content = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  })
}
