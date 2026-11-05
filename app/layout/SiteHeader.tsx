import { Link } from "react-router"
import type { Theme } from "~/site/theme.server"
import { SITE_NAME } from "~/site/site.consts"
import { MobileNav } from "./MobileNav"
import { NavLinks } from "./NavLinks"
import { ThemeToggle } from "./ThemeToggle"

export const SiteHeader = ({ theme }: { theme: Theme }) => (
  <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
      <Link
        to="/"
        className="text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
      >
        {SITE_NAME}
      </Link>

      <nav className="hidden items-center gap-1 md:flex">
        <NavLinks
          linkClassName="rounded-md px-3 py-2 text-sm font-medium transition-colors"
          activeClassName="text-foreground"
          inactiveClassName="text-muted-foreground hover:text-foreground"
        />
        <div className="ml-2">
          <ThemeToggle theme={theme} />
        </div>
      </nav>

      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle theme={theme} />
        <MobileNav />
      </div>
    </div>
  </header>
)
