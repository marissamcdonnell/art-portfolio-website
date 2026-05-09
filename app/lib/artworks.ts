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
  // Placeholder artworks — replace blobUrl with real Vercel Blob URLs after running `pnpm art:upload`
  {
    id: "placeholder-1",
    title: "Untitled No. 1",
    year: 2024,
    medium: "Oil on canvas",
    dimensions: '24" × 30"',
    blobUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    width: 800,
    height: 1000,
    alt: "A vibrant oil painting",
    category: "oil-painting",
    featured: true,
    description: "Replace this with your painting description.",
  },
  {
    id: "placeholder-2",
    title: "Untitled No. 2",
    year: 2023,
    medium: "Oil on canvas",
    dimensions: '18" × 24"',
    blobUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80",
    width: 800,
    height: 1067,
    alt: "An expressive oil painting",
    category: "oil-painting",
    featured: true,
  },
  {
    id: "placeholder-3",
    title: "Untitled No. 3",
    year: 2023,
    medium: "Oil on linen",
    dimensions: '36" × 48"',
    blobUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    width: 800,
    height: 800,
    alt: "A large-format oil painting",
    category: "oil-painting",
    featured: true,
  },
  {
    id: "placeholder-4",
    title: "Study in Blue",
    year: 2022,
    medium: "Oil on panel",
    dimensions: '12" × 16"',
    blobUrl: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    width: 800,
    height: 1067,
    alt: "A small-format oil study",
    category: "oil-painting",
  },
  {
    id: "placeholder-5",
    title: "Abstract Study",
    year: 2024,
    medium: "Watercolor",
    dimensions: '11" × 14"',
    blobUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    width: 800,
    height: 600,
    alt: "A watercolor abstract",
    category: "other",
    featured: true,
  },
  {
    id: "placeholder-6",
    title: "Charcoal Portrait",
    year: 2023,
    medium: "Charcoal on paper",
    dimensions: '18" × 24"',
    blobUrl: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80",
    width: 800,
    height: 1000,
    alt: "A charcoal portrait drawing",
    category: "other",
  },
]

export function getArtworksByCategory(category: ArtworkCategory) {
  return artworks.filter((a) => a.category === category)
}

export function getFeaturedArtworks(limit = 3) {
  return artworks.filter((a) => a.featured).slice(0, limit)
}
