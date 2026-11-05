export const HOME_LABELS = {
  metaTitle: "Marissa McDonnell — Artist and Software Engineer",
  metaDescription:
    "Oil painter and mixed-media artist. Expressive, layered work exploring color, light, and the quiet in-between.",
  jsonLdDescription: "Oil painter and mixed-media artist.",
} as const

export const HERO_LABELS = {
  eyebrow: "Artist & Software Engineer",
  tagline:
    "Oil paintings and mixed media — expressive, layered work that explores color, light, and the quiet in-between.",
  viewPaintings: "View Oil Paintings",
  about: "About Me",
} as const

export const FEATURED_LABELS = {
  eyebrow: "Recent Work",
  title: "Featured Paintings",
  viewAll: "View all",
  details: (medium: string, year: number) => `${medium} · ${year}`,
} as const

export const COMMISSION_LABELS = {
  title: "Interested in a piece?",
  body: "I take commissions and occasionally sell originals. Reach out and let's talk.",
  cta: "Get in Touch",
} as const
