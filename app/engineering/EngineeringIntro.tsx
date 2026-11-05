import { Github } from "lucide-react"
import { Button } from "~/library/components/Button"
import { GITHUB_URL } from "~/site/site.consts"
import { ENGINEERING_LABELS } from "./engineering.strings"

export const EngineeringIntro = () => (
  <div className="mb-12">
    <div className="space-y-4 leading-relaxed text-muted-foreground">
      {ENGINEERING_LABELS.intro.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
    <div className="mt-8 flex flex-wrap gap-3">
      <Button asChild variant="outline">
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 size-4" />
          {ENGINEERING_LABELS.githubLabel}
        </a>
      </Button>
    </div>
  </div>
)
