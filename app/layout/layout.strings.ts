export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/oil-paintings", label: "Oil Paintings" },
  { href: "/other-arts", label: "Other Arts" },
  { href: "/engineering", label: "Engineering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const

export const HEADER_LABELS = {
  openMenu: "Open menu",
  switchTheme: (theme: string) => `Switch to ${theme} mode`,
} as const

export const FOOTER_LABELS = {
  copyright: (year: number, name: string) => `© ${year} ${name}. All rights reserved.`,
} as const

export const ERROR_LABELS = {
  title: "Oops!",
  notFoundTitle: "404",
  errorTitle: "Error",
  details: "An unexpected error occurred.",
  notFound: "The page you're looking for doesn't exist.",
} as const
