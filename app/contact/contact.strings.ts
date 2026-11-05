export const CONTACT_LABELS = {
  metaTitle: "Contact",
  metaDescription:
    "Get in touch with Marissa McDonnell for commissions, original work inquiries, or just to say hello.",
  eyebrow: "Say Hello",
  title: "Contact",
} as const

export const FORM_LABELS = {
  name: "Name *",
  namePlaceholder: "Your name",
  email: "Email *",
  emailPlaceholder: "you@example.com",
  subject: "Subject",
  subjectPlaceholder: "Commission inquiry, general question…",
  message: "Message *",
  messagePlaceholder: "Tell me what you're thinking…",
  send: "Send Message",
  sending: "Sending…",
} as const

export const FORM_ERRORS = {
  missingFields: "Please fill in all required fields.",
  notConfigured: "Contact form is not configured yet. Please email me directly.",
  failed: "Something went wrong. Please try emailing me directly.",
} as const

export const SUCCESS_LABELS = {
  title: "Message sent!",
  body: "Thanks for reaching out. I'll get back to you soon.",
  sendAnother: "Send another message",
} as const

export const SIDEBAR_LABELS = {
  direct: "Direct Contact",
  social: "Social",
  commissions: "Commissions",
  commissionsBefore: "I'm currently ",
  commissionsStatus: "accepting commissions",
  commissionsAfter: ". Portrait, landscape, and still life — feel free to describe your vision.",
} as const
