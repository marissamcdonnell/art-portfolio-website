"use client"

import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { ArtImage } from "~/components/art-image"
import type { Artwork } from "~/lib/artworks"

type GalleryProps = {
  artworks: Artwork[]
}

export function Gallery({ artworks }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const slides = artworks.map((a) => ({
    src: a.blobUrl,
    alt: a.alt,
    width: a.width,
    height: a.height,
    title: a.title,
    description: `${a.medium} · ${a.dimensions} · ${a.year}`,
  }))

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {artworks.map((artwork, index) => (
          <div key={artwork.id} className="mb-4 break-inside-avoid">
            <button
              type="button"
              className="group w-full overflow-hidden rounded-lg border border-border/50 transition-transform hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setLightboxIndex(index)}
              aria-label={`View ${artwork.title} in fullscreen`}
            >
              <ArtImage
                src={artwork.blobUrl}
                alt={artwork.alt}
                width={artwork.width}
                height={artwork.height}
                className="rounded-lg"
              />
            </button>
            <div className="mt-2 px-1">
              <p className="text-sm font-medium text-foreground">{artwork.title}</p>
              <p className="text-xs text-muted-foreground">
                {artwork.medium} · {artwork.year}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
      />
    </>
  )
}
