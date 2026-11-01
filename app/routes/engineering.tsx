import type { Route } from "./+types/engineering"
import { Github } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Separator } from "~/components/ui/separator"
import { ProjectCard } from "~/components/project-card"
import { seoMeta } from "~/lib/seo"
import {
  ENGINEERING_TEXT,
  GITHUB_URL,
  SIDE_PROJECTS,
  WORK_HIGHLIGHTS,
} from "~/lib/engineering"

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: ENGINEERING_TEXT.metaTitle,
    description: ENGINEERING_TEXT.metaDescription,
    path: "/engineering",
  })

export default function Engineering() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="mb-12">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {ENGINEERING_TEXT.eyebrow}
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight">{ENGINEERING_TEXT.heading}</h1>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          {ENGINEERING_TEXT.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 size-4" />
              {ENGINEERING_TEXT.githubLabel}
            </a>
          </Button>
        </div>
      </div>

      <Separator className="mb-12" />

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold tracking-tight">{ENGINEERING_TEXT.workHeading}</h2>
        <ul className="list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
          {WORK_HIGHLIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-6 text-xl font-semibold tracking-tight">
          {ENGINEERING_TEXT.sideProjectsHeading}
        </h2>
        <div className="grid gap-6">
          {SIDE_PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
