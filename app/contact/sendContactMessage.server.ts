import { FORM_ERRORS } from "./contact.strings"
import type { ContactResult } from "./contact.types"

const field = (formData: FormData, name: string) => String(formData.get(name) || "").trim()

export const sendContactMessage = async (formData: FormData): Promise<ContactResult> => {
  const message = {
    name: field(formData, "name"),
    email: field(formData, "email"),
    subject: field(formData, "subject"),
    message: field(formData, "message"),
  }

  if (!message.name || !message.email || !message.message) {
    return { ok: false, error: FORM_ERRORS.missingFields }
  }

  const appsScriptUrl = process.env.APPS_SCRIPT_URL
  if (!appsScriptUrl) return { ok: false, error: FORM_ERRORS.notConfigured }

  try {
    const res = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    })
    if (!res.ok) throw new Error("Apps Script returned non-OK")
    return { ok: true }
  } catch {
    return { ok: false, error: FORM_ERRORS.failed }
  }
}
