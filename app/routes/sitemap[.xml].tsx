import type { Route } from "./+types/sitemap[.xml]"
import { artworks } from "~/lib/artworks"
import { SITE_URL } from "~/lib/seo"

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/oil-paintings", priority: "0.9", changefreq: "weekly" },
  { path: "/other-arts", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.6", changefreq: "yearly" },
]

function xmlEscape(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export function loader({ request }: Route.LoaderArgs) {
  const today = new Date().toISOString().split("T")[0]

  const urls = STATIC_ROUTES.map(
    ({ path, priority, changefreq }) => `
  <url>
    <loc>${xmlEscape(SITE_URL + path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )

  // Image sitemap entries for artworks
  const imageUrls = artworks.map(
    (artwork) => `
  <url>
    <loc>${xmlEscape(SITE_URL + (artwork.category === "oil-painting" ? "/oil-paintings" : "/other-arts"))}</loc>
    <image:image>
      <image:loc>${xmlEscape(artwork.blobUrl)}</image:loc>
      <image:title>${xmlEscape(artwork.title)}</image:title>
      <image:caption>${xmlEscape(`${artwork.medium}, ${artwork.dimensions}, ${artwork.year}`)}</image:caption>
    </image:image>
  </url>`
  )

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
${urls.join("")}
${imageUrls.join("")}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
