import { GALLERY_LABELS } from "./art.strings"
import type { Artwork } from "./art.types"
import { ArtImage } from "./ArtImage"

type GalleryItemProps = {
  artwork: Artwork
  onOpen: () => void
}

export const GalleryItem = ({ artwork, onOpen }: GalleryItemProps) => (
  <div className="mb-4 break-inside-avoid">
    <button
      type="button"
      className="group w-full overflow-hidden rounded-lg border border-border/50 transition-transform hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      onClick={onOpen}
      aria-label={GALLERY_LABELS.viewFullscreen(artwork.title)}
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
        {GALLERY_LABELS.details(artwork.medium, artwork.year)}
      </p>
    </div>
  </div>
)
