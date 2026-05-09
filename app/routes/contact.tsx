import { useState } from "react"
import { data, useFetcher } from "react-router"
import type { Route } from "./+types/contact"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Label } from "~/components/ui/label"
import { Separator } from "~/components/ui/separator"
import { Mail, Instagram, CheckCircle, AlertCircle } from "lucide-react"

export const meta: Route.MetaFunction = () => [
  { title: "Contact — Marissa McDonnell" },
  {
    name: "description",
    content:
      "Get in touch with Marissa McDonnell for commissions, inquiries, or just to say hello.",
  },
]

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const subject = String(formData.get("subject") || "").trim()
  const message = String(formData.get("message") || "").trim()

  if (!name || !email || !message) {
    return data({ ok: false, error: "Please fill in all required fields." })
  }

  const appsScriptUrl = process.env.APPS_SCRIPT_URL
  if (!appsScriptUrl) {
    return data({ ok: false, error: "Contact form is not configured yet. Please email me directly." })
  }

  try {
    const res = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    })

    if (!res.ok) throw new Error("Apps Script returned non-OK")

    return data({ ok: true })
  } catch {
    return data({
      ok: false,
      error: "Something went wrong. Please try emailing me directly.",
    })
  }
}

export default function Contact() {
  const fetcher = useFetcher<typeof action>()
  const isSubmitting = fetcher.state !== "idle"
  const result = fetcher.data

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="mb-12">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Say Hello
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
      </div>

      <div className="grid gap-16 lg:grid-cols-[1fr_280px]">
        {/* Form */}
        <div>
          {result?.ok ? (
            <div className="flex flex-col items-start gap-4 rounded-xl border border-border/50 bg-muted/30 p-8">
              <CheckCircle className="size-8 text-green-500" />
              <div>
                <h2 className="text-lg font-semibold">Message sent!</h2>
                <p className="mt-1 text-muted-foreground">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => fetcher.load("/contact")}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <fetcher.Form method="post" className="space-y-6">
              {result?.error && (
                <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  <AlertCircle className="size-4 shrink-0" />
                  {result.error}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Commission inquiry, general question…"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me what you're thinking…"
                  rows={6}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Send Message"}
              </Button>
            </fetcher.Form>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Direct Contact
            </h2>
            <a
              href="mailto:marissa@marissamcdonnell.com"
              className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-muted-foreground"
            >
              <Mail className="size-4 shrink-0" />
              marissa@marissamcdonnell.com
            </a>
          </div>

          <Separator />

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Social
            </h2>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-muted-foreground"
            >
              <Instagram className="size-4 shrink-0" />
              Instagram
            </a>
          </div>

          <Separator />

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Commissions
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm currently{" "}
              <span className="font-medium text-foreground">accepting commissions</span>.
              Portrait, landscape, and still life — feel free to describe your vision.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
