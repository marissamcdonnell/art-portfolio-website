import { artworks } from "../artworks"

export const getFeaturedArtworks = (limit = 3) => artworks.filter((a) => a.featured).slice(0, limit)
