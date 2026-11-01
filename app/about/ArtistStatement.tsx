import { ABOUT_LABELS } from "./about.strings"

export const ArtistStatement = () => (
  <section className="mb-12">
    <h2 className="mb-6 text-xl font-semibold tracking-tight">{ABOUT_LABELS.statementTitle}</h2>
    <div className="space-y-4 text-muted-foreground leading-relaxed">
      {ABOUT_LABELS.statement.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </section>
)
