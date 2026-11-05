import { INSTAGRAM_URL, SITE_NAME } from "~/site/site.consts"
import { SITE_LABELS } from "~/site/site.strings"
import { FOOTER_LABELS } from "./layout.strings"

export const SiteFooter = () => (
  <footer className="border-t border-border/40 py-8">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {FOOTER_LABELS.copyright(new Date().getFullYear(), SITE_NAME)}
        </p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            {SITE_LABELS.instagram}
          </a>
        </div>
      </div>
    </div>
  </footer>
)
