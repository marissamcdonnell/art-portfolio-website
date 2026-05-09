import type { Route } from "./+types/about"
import { Separator } from "~/components/ui/separator"
import { seoMeta } from "~/lib/seo"

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: "About",
    description: "Learn about Marissa McDonnell — oil painter, mixed-media artist, and her process.",
    path: "/about",
  })

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      {/* Page heading */}
      <div className="mb-12">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          The Artist
        </p>
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
      </div>

      {/* Photo + bio */}
      <div className="mb-12 grid gap-10 sm:grid-cols-[200px_1fr]">
        {/* Artist photo placeholder */}
        <div className="aspect-square w-48 overflow-hidden rounded-full border border-border/50 bg-muted sm:w-full">
          {/* Replace with your actual photo */}
          <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
            Photo coming soon
          </div>
        </div>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {/* ↓ Replace this with your actual bio */}
          <p>
            Hi, I'm Marissa. I'm an artist based in [your city], working
            primarily in oil on canvas and linen. My paintings explore [your
            themes — e.g., "the relationship between light and memory,
            domestic interiors, or the landscapes of the Pacific Northwest"].
          </p>
          <p>
            I started painting [when / how]. What keeps me coming back to oil is
            [what you love about the medium — the layering, the blending time,
            the way light hits impasto].
          </p>
          <p>
            Beyond oils, I work in [other media — watercolor, charcoal,
            printmaking]. Each medium teaches me something different about
            seeing.
          </p>
        </div>
      </div>

      <Separator className="mb-12" />

      {/* Artist Statement */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold tracking-tight">Artist Statement</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {/* ↓ Replace with your actual statement */}
          <p>
            [Your artist statement goes here. This is a great place to talk
            about your intent, your process, and what you want viewers to take
            away from your work. Keep it genuine and in your own voice — a
            few paragraphs is plenty.]
          </p>
          <p>
            My process begins with [observation / photographs / plein air
            sketches]. In the studio, I [describe your process — e.g., work in
            thin glazes over a tonal ground, or block in large shapes before
            refining edges].
          </p>
        </div>
      </section>

      <Separator className="mb-12" />

      {/* Education / Exhibitions (optional) */}
      <section>
        <h2 className="mb-6 text-xl font-semibold tracking-tight">Background</h2>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-4">
            <span className="w-12 shrink-0 font-medium text-foreground">2024</span>
            <span>[Exhibition / award / milestone]</span>
          </li>
          <li className="flex gap-4">
            <span className="w-12 shrink-0 font-medium text-foreground">2022</span>
            <span>[Exhibition / workshop / residency]</span>
          </li>
          <li className="flex gap-4">
            <span className="w-12 shrink-0 font-medium text-foreground">2020</span>
            <span>[Started painting / studied with / graduated from]</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
