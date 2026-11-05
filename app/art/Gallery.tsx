import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { GALLERY_LABELS } from "./art.strings"
import type { Artwork } from "./art.types"
import { GalleryItem } from "./GalleryItem"

const CLOSED = -1

export const Gallery = ({ artworks }: { artworks: Artwork[] }) => {
  const [lightboxIndex, setLightboxIndex] = useState(CLOSED)

  const slides = artworks.map((a) => ({
    src: a.blobUrl,
    alt: a.alt,
    width: a.width,
    height: a.height,
    title: a.title,
    description: GALLERY_LABELS.details(a.medium, a.dimensions, a.year),
  }))

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {artworks.map((artwork, index) => (
          <GalleryItem key={artwork.id} artwork={artwork} onOpen={() => setLightboxIndex(index)} />
        ))}
      </div>

      <Lightbox
        open={lightboxIndex !== CLOSED}
        close={() => setLightboxIndex(CLOSED)}
        index={lightboxIndex}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
      />
    </>
  )
}
