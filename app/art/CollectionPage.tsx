import { PageHeading } from "~/library/components/PageHeading"
import { COLLECTION_LABELS } from "./art.strings"
import type { Artwork } from "./art.types"
import { Gallery } from "./Gallery"

type CollectionPageProps = {
  title: string
  subtitle: string
  artworks: Artwork[]
}

export const CollectionPage = ({ title, subtitle, artworks }: CollectionPageProps) => (
  <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
    <PageHeading eyebrow={COLLECTION_LABELS.eyebrow} title={title}>
      <p className="mt-3 text-muted-foreground">{subtitle}</p>
    </PageHeading>
    <Gallery artworks={artworks} />
  </div>
)
