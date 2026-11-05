import { ABOUT_LABELS } from "./about.strings"

export const AboutBio = () => (
  <div className="mb-12 grid gap-10 sm:grid-cols-[200px_1fr]">
    <div className="aspect-square w-48 overflow-hidden rounded-full border border-border/50 bg-muted sm:w-full">
      <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
        {ABOUT_LABELS.photoPlaceholder}
      </div>
    </div>

    <div className="space-y-4 text-muted-foreground leading-relaxed">
      {ABOUT_LABELS.bio.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </div>
)
