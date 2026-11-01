export const COLLECTION_LABELS = {
  eyebrow: "Portfolio",
  workCount: (count: number) => `${count} work${count !== 1 ? "s" : ""}`,
} as const

export const OIL_PAINTINGS_LABELS = {
  title: "Oil Paintings",
  subtitle: (count: string) => `${count} — click any to view full size`,
  jsonLdDescription: (name: string) => `Original oil paintings by ${name}`,
  metaDescription: (count: number | string) =>
    `A collection of ${count} original oil paintings by Marissa McDonnell. Expressive, layered work on canvas and linen.`,
} as const

export const OTHER_ARTS_LABELS = {
  title: "Other Arts",
  subtitle: (count: string) => `Watercolor, charcoal, mixed media, and more — ${count}`,
  jsonLdDescription: (name: string) => `Watercolor, charcoal, and mixed media works by ${name}`,
  metaDescription:
    "Watercolor, charcoal, mixed media, and more — works on paper and beyond by Marissa McDonnell.",
} as const

export const GALLERY_LABELS = {
  viewFullscreen: (title: string) => `View ${title} in fullscreen`,
  details: (...parts: (string | number)[]) => parts.join(" · "),
} as const
