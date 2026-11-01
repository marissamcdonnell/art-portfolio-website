import { Instagram, Mail } from "lucide-react"
import type { ReactNode } from "react"
import { Separator } from "~/library/components/Separator"
import { CONTACT_EMAIL, INSTAGRAM_URL } from "~/site/site.consts"
import { SITE_LABELS } from "~/site/site.strings"
import { SIDEBAR_LABELS } from "./contact.strings"

const LINK_CLASS =
  "flex items-center gap-2 text-sm text-foreground transition-colors hover:text-muted-foreground"

const SidebarSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
      {title}
    </h2>
    {children}
  </div>
)

export const ContactSidebar = () => (
  <aside className="space-y-8">
    <SidebarSection title={SIDEBAR_LABELS.direct}>
      <a href={`mailto:${CONTACT_EMAIL}`} className={LINK_CLASS}>
        <Mail className="size-4 shrink-0" />
        {CONTACT_EMAIL}
      </a>
    </SidebarSection>

    <Separator />

    <SidebarSection title={SIDEBAR_LABELS.social}>
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
        <Instagram className="size-4 shrink-0" />
        {SITE_LABELS.instagram}
      </a>
    </SidebarSection>

    <Separator />

    <SidebarSection title={SIDEBAR_LABELS.commissions}>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {SIDEBAR_LABELS.commissionsBefore}
        <span className="font-medium text-foreground">{SIDEBAR_LABELS.commissionsStatus}</span>
        {SIDEBAR_LABELS.commissionsAfter}
      </p>
    </SidebarSection>
  </aside>
)
