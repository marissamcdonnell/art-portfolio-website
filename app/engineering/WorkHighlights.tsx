import { ENGINEERING_LABELS, WORK_HIGHLIGHTS } from "./engineering.strings"

export const WorkHighlights = () => (
  <section className="mb-12">
    <h2 className="mb-6 text-xl font-semibold tracking-tight">{ENGINEERING_LABELS.workHeading}</h2>
    <ul className="list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
      {WORK_HIGHLIGHTS.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
)
