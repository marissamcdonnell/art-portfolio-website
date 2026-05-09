export type ArtworkCategory = "oil-painting" | "other"

export type Artwork = {
  id: string
  title: string
  year: number
  medium: string
  dimensions: string
  blobUrl: string
  width: number
  height: number
  alt: string
  category: ArtworkCategory
  featured?: boolean
  description?: string
}

export const artworks: Artwork[] = [
  // ── Oil Paintings ──────────────────────────────────────────────────────────
  {
    id: "purple-still-life-2024",
    title: "Purple Still Life",
    year: 2024,
    medium: "Oil on canvas",
    dimensions: '??" × ??"',
    blobUrl: "https://yeqpkplo8laycxk1.public.blob.vercel-storage.com/art/oil-paintings/purple-still-life_2024-i4Ts7Mrp8ISYgcHFmHXzL79SccbNZe.webp",
    width: 2400,
    height: 3188,
    alt: "A purple still life oil painting",
    category: "oil-painting",
    featured: true,
  },
  {
    id: "selfportrait-2026",
    title: "Self Portrait",
    year: 2026,
    medium: "Oil on canvas",
    dimensions: '??" × ??"',
    blobUrl: "https://yeqpkplo8laycxk1.public.blob.vercel-storage.com/art/oil-paintings/selfportrait_2026-xebD1AZGo03Nfu47U8j3mPxo9sNEwi.webp",
    width: 2164,
    height: 2908,
    alt: "An oil self portrait",
    category: "oil-painting",
    featured: true,
  },
  {
    id: "still-life-2024",
    title: "Still Life",
    year: 2024,
    medium: "Oil on canvas",
    dimensions: '??" × ??"',
    blobUrl: "https://yeqpkplo8laycxk1.public.blob.vercel-storage.com/art/oil-paintings/still-life_2024-JLSaAV611acDTo9plpQ1RILodMCETA.webp",
    width: 2400,
    height: 3188,
    alt: "A still life oil painting",
    category: "oil-painting",
    featured: true,
  },
  {
    id: "twopeoplestudy-2026",
    title: "Two People Study",
    year: 2026,
    medium: "Oil on canvas",
    dimensions: '??" × ??"',
    blobUrl: "https://yeqpkplo8laycxk1.public.blob.vercel-storage.com/art/oil-paintings/twopeoplestudy_2026-eCa5YMjw0PSKZtDWvlT5ELdM0pyEzc.webp",
    width: 2400,
    height: 3188,
    alt: "A figure study of two people in oil",
    category: "oil-painting",
  },

  // ── Other Arts ─────────────────────────────────────────────────────────────
  {
    id: "cross-stitch-ghost-2024",
    title: "Cross Stitch Ghost",
    year: 2024,
    medium: "Cross-stitch on fabric",
    dimensions: '??" × ??"',
    blobUrl: "https://yeqpkplo8laycxk1.public.blob.vercel-storage.com/art/other-arts/cross-stitch-ghost_2024-0rllrmsO0tiSDWcHsoR9qqif5EmYaN.webp",
    width: 2400,
    height: 3188,
    alt: "A ghost motif in cross-stitch",
    category: "other",
    featured: true,
  },
  {
    id: "green-tat-2026",
    title: "Green Tatting",
    year: 2026,
    medium: "Tatting lace",
    dimensions: '??" × ??"',
    blobUrl: "https://yeqpkplo8laycxk1.public.blob.vercel-storage.com/art/other-arts/green-tat_2026-kZ7sA80fSELJVhw2qHx5w9M9B4Ql9s.webp",
    width: 2400,
    height: 1807,
    alt: "Green tatting lace piece",
    category: "other",
  },
  {
    id: "tatting-sample",
    title: "Tatting Sample",
    year: 2024,
    medium: "Tatting lace",
    dimensions: '??" × ??"',
    blobUrl: "https://yeqpkplo8laycxk1.public.blob.vercel-storage.com/art/other-arts/tatting-sample-2tOqlpNW81AlU19hhcpbDr0x5CgGqz.webp",
    width: 2400,
    height: 3188,
    alt: "A tatting lace sample",
    category: "other",
  },
  {
    id: "tatting-sample-2",
    title: "Tatting Sample No. 2",
    year: 2024,
    medium: "Tatting lace",
    dimensions: '??" × ??"',
    blobUrl: "https://yeqpkplo8laycxk1.public.blob.vercel-storage.com/art/other-arts/%20tatting-sample-2-VlEfewk8nYwRxfdhXH7WR7HDUF9Bj3.webp",
    width: 2400,
    height: 3188,
    alt: "A second tatting lace sample",
    category: "other",
  },
]

export function getArtworksByCategory(category: ArtworkCategory) {
  return artworks.filter((a) => a.category === category)
}

export function getFeaturedArtworks(limit = 3) {
  return artworks.filter((a) => a.featured).slice(0, limit)
}
