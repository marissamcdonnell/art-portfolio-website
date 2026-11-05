import { Menu } from "lucide-react"
import { Button } from "~/library/components/Button"
import { Sheet, SheetContent, SheetTrigger } from "~/library/components/Sheet"
import { HEADER_LABELS } from "./layout.strings"
import { NavLinks } from "./NavLinks"

export const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" aria-label={HEADER_LABELS.openMenu}>
        <Menu className="size-5" />
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="w-64">
      <nav className="mt-8 flex flex-col gap-1">
        <NavLinks
          linkClassName="rounded-md px-3 py-2.5 text-sm font-medium transition-colors"
          activeClassName="bg-accent text-foreground"
          inactiveClassName="text-muted-foreground hover:bg-accent hover:text-foreground"
        />
      </nav>
    </SheetContent>
  </Sheet>
)
