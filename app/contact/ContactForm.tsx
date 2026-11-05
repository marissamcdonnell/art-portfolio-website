import { useFetcher } from "react-router"
import { Button } from "~/library/components/Button"
import { Input } from "~/library/components/Input"
import { Textarea } from "~/library/components/Textarea"
import { ContactSuccess } from "./ContactSuccess"
import { FORM_LABELS } from "./contact.strings"
import { FormError } from "./FormError"
import { FormField } from "./FormField"
import type { ContactResult } from "./contact.types"

export const ContactForm = () => {
  const fetcher = useFetcher<ContactResult>()
  const isSubmitting = fetcher.state !== "idle"
  const result = fetcher.data

  if (result?.ok) return <ContactSuccess onReset={() => fetcher.load("/contact")} />

  return (
    <fetcher.Form method="post" className="space-y-6">
      {result && !result.ok && <FormError message={result.error} />}

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="name" label={FORM_LABELS.name}>
          <Input
            id="name"
            name="name"
            placeholder={FORM_LABELS.namePlaceholder}
            required
            disabled={isSubmitting}
          />
        </FormField>
        <FormField id="email" label={FORM_LABELS.email}>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={FORM_LABELS.emailPlaceholder}
            required
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      <FormField id="subject" label={FORM_LABELS.subject}>
        <Input
          id="subject"
          name="subject"
          placeholder={FORM_LABELS.subjectPlaceholder}
          disabled={isSubmitting}
        />
      </FormField>

      <FormField id="message" label={FORM_LABELS.message}>
        <Textarea
          id="message"
          name="message"
          placeholder={FORM_LABELS.messagePlaceholder}
          rows={6}
          required
          disabled={isSubmitting}
        />
      </FormField>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? FORM_LABELS.sending : FORM_LABELS.send}
      </Button>
    </fetcher.Form>
  )
}
