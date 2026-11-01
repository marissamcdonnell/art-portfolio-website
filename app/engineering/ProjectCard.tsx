import { Badge } from "~/library/components/Badge"
import { ENGINEERING_LABELS } from "./engineering.strings"
import type { Project } from "./engineering.types"

const ProjectTitle = ({ project }: { project: Project }) =>
  project.url ? (
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

export const ProjectCard = ({ project }: { project: Project }) => (
  <article className="rounded-xl border border-border/50 p-6">
    <div className="mb-3 flex flex-wrap items-center gap-2">
      <h3 className="text-lg font-semibold tracking-tight">
        <ProjectTitle project={project} />
      </h3>
      {project.inProgress ? (
        <Badge variant="secondary">{ENGINEERING_LABELS.inProgress}</Badge>
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
