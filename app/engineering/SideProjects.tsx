import { ENGINEERING_LABELS, SIDE_PROJECTS } from "./engineering.strings"
import { ProjectCard } from "./ProjectCard"

export const SideProjects = () => (
  <section>
    <h2 className="mb-6 text-xl font-semibold tracking-tight">
      {ENGINEERING_LABELS.sideProjectsHeading}
    </h2>
    <div className="grid gap-6">
      {SIDE_PROJECTS.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </section>
)
