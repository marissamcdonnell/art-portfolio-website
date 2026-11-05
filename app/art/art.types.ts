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
