import { data } from "react-router"
import type { Route } from "./+types/contact"
import { ContactForm } from "~/contact/ContactForm"
import { ContactSidebar } from "~/contact/ContactSidebar"
import { CONTACT_LABELS } from "~/contact/contact.strings"
import { sendContactMessage } from "~/contact/sendContactMessage.server"
import { PageHeading } from "~/library/components/PageHeading"
import { seoMeta } from "~/site/seo"

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: CONTACT_LABELS.metaTitle,
    description: CONTACT_LABELS.metaDescription,
    path: "/contact",
  })

export const action = async ({ request }: Route.ActionArgs) =>
  data(await sendContactMessage(await request.formData()))

const Contact = () => (
  <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
    <PageHeading eyebrow={CONTACT_LABELS.eyebrow} title={CONTACT_LABELS.title} />
    <div className="grid gap-16 lg:grid-cols-[1fr_280px]">
      <ContactForm />
      <ContactSidebar />
    </div>
  </div>
)

export default Contact
