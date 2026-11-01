import type { ArtworkCategory } from "../art.types"
import { artworks } from "../artworks"

export const getArtworksByCategory = (category: ArtworkCategory) =>
  artworks.filter((a) => a.category === category)
