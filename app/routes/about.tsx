import type { Route } from "./+types/about"
import { AboutBio } from "~/about/AboutBio"
import { ABOUT_LABELS } from "~/about/about.strings"
import { ArtistStatement } from "~/about/ArtistStatement"
import { Background } from "~/about/Background"
import { PageHeading } from "~/library/components/PageHeading"
import { Separator } from "~/library/components/Separator"
import { seoMeta } from "~/site/seo"

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: ABOUT_LABELS.metaTitle,
    description: ABOUT_LABELS.metaDescription,
    path: "/about",
  })

const About = () => (
  <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
    <PageHeading eyebrow={ABOUT_LABELS.eyebrow} title={ABOUT_LABELS.title} />
    <AboutBio />
    <Separator className="mb-12" />
    <ArtistStatement />
    <Separator className="mb-12" />
    <Background />
  </div>
)

export default About
