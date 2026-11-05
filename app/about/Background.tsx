import { ABOUT_LABELS } from "./about.strings"

export const Background = () => (
  <section>
    <h2 className="mb-6 text-xl font-semibold tracking-tight">{ABOUT_LABELS.backgroundTitle}</h2>
    <ul className="space-y-3 text-sm text-muted-foreground">
      {ABOUT_LABELS.background.map((item) => (
        <li key={item.year} className="flex gap-4">
          <span className="w-12 shrink-0 font-medium text-foreground">{item.year}</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  </section>
)
