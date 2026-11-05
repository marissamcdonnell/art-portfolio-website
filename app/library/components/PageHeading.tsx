import type { ReactNode } from "react"

type PageHeadingProps = {
  eyebrow: string
  title: string
  children?: ReactNode
}

export const PageHeading = ({ eyebrow, title, children }: PageHeadingProps) => (
  <div className="mb-12">
    <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
      {eyebrow}
    </p>
    <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
    {children}
  </div>
)
