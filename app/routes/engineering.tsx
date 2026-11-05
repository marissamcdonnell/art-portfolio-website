import type { Route } from "./+types/engineering"
import { EngineeringIntro } from "~/engineering/EngineeringIntro"
import { ENGINEERING_LABELS } from "~/engineering/engineering.strings"
import { SideProjects } from "~/engineering/SideProjects"
import { WorkHighlights } from "~/engineering/WorkHighlights"
import { PageHeading } from "~/library/components/PageHeading"
import { Separator } from "~/library/components/Separator"
import { seoMeta } from "~/site/seo"

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: ENGINEERING_LABELS.metaTitle,
    description: ENGINEERING_LABELS.metaDescription,
    path: "/engineering",
  })

const Engineering = () => (
  <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
    <PageHeading eyebrow={ENGINEERING_LABELS.eyebrow} title={ENGINEERING_LABELS.heading} />
    <EngineeringIntro />
    <Separator className="mb-12" />
    <WorkHighlights />
    <SideProjects />
  </div>
)

export default Engineering
