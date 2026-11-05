import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import { Button } from "~/library/components/Button"
import { SITE_NAME } from "~/site/site.consts"
import { HERO_LABELS } from "./home.strings"

export const Hero = () => (
  <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center sm:px-6">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/40 via-background to-background" />
    <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
      {HERO_LABELS.eyebrow}
    </p>
    <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
      {SITE_NAME}
    </h1>
    <p className="mb-10 max-w-xl text-lg text-muted-foreground">{HERO_LABELS.tagline}</p>
    <div className="flex flex-wrap justify-center gap-4">
      <Button asChild size="lg">
        <Link to="/oil-paintings">
          {HERO_LABELS.viewPaintings}
          <ArrowRight className="ml-2 size-4" />
        </Link>
      </Button>
      <Button asChild variant="outline" size="lg">
        <Link to="/about">{HERO_LABELS.about}</Link>
      </Button>
    </div>
  </section>
)
