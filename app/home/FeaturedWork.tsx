import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import type { Artwork } from "~/art/art.types"
import { Button } from "~/library/components/Button"
import { FeaturedCard } from "./FeaturedCard"
import { FEATURED_LABELS } from "./home.strings"

export const FeaturedWork = ({ artworks }: { artworks: Artwork[] }) => (
  <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
    <div className="mb-10 flex items-end justify-between">
      <div>
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {FEATURED_LABELS.eyebrow}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">{FEATURED_LABELS.title}</h2>
      </div>
      <Button asChild variant="ghost" size="sm">
        <Link to="/oil-paintings">
          {FEATURED_LABELS.viewAll}
          <ArrowRight className="ml-1.5 size-3.5" />
        </Link>
      </Button>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {artworks.map((artwork, i) => (
        <FeaturedCard key={artwork.id} artwork={artwork} priority={i === 0} />
      ))}
    </div>
  </section>
)
