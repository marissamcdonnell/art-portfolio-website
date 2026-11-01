import { Badge } from "~/components/ui/badge"
import { ENGINEERING_TEXT, type Project } from "~/lib/engineering"

export function ProjectCard({ project }: { project: Project }) {
  const title = project.url ? (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline underline-offset-4"
    >
      {project.name}
    </a>
  ) : (
    project.name
  )

  return (
    <article className="rounded-xl border border-border/50 p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        {project.inProgress ? (
          <Badge variant="secondary">{ENGINEERING_TEXT.inProgress}</Badge>
        ) : null}
      </div>
      <p className="mb-4 leading-relaxed text-muted-foreground">{project.summary}</p>
      <ul className="flex flex-wrap gap-2">
        {project.stack.map((tool) => (
          <li key={tool}>
            <Badge variant="outline">{tool}</Badge>
          </li>
        ))}
      </ul>
    </article>
  )
}
