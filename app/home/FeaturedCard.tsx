import { Link } from "react-router"
import type { Artwork } from "~/art/art.types"
import { ArtImage } from "~/art/ArtImage"
import { FEATURED_LABELS } from "./home.strings"

type FeaturedCardProps = {
  artwork: Artwork
  priority: boolean
}

export const FeaturedCard = ({ artwork, priority }: FeaturedCardProps) => (
  <Link
    to="/oil-paintings"
    className="group overflow-hidden rounded-xl border border-border/50 transition-all hover:border-border hover:shadow-lg"
  >
    <ArtImage
      src={artwork.blobUrl}
      alt={artwork.alt}
      width={artwork.width}
      height={artwork.height}
      priority={priority}
      className="aspect-[4/5] rounded-t-xl"
    />
    <div className="p-4">
      <p className="font-medium text-foreground">{artwork.title}</p>
      <p className="mt-0.5 text-sm text-muted-foreground">
        {FEATURED_LABELS.details(artwork.medium, artwork.year)}
      </p>
    </div>
  </Link>
)
