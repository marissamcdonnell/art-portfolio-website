import { Moon, Sun } from "lucide-react"
import { useFetcher } from "react-router"
import { Button } from "~/library/components/Button"
import type { Theme } from "~/site/theme.server"
import { HEADER_LABELS } from "./layout.strings"

export const ThemeToggle = ({ theme }: { theme: Theme }) => {
  const fetcher = useFetcher()
  const nextTheme = theme === "dark" ? "light" : "dark"

  return (
    <fetcher.Form method="post" action="/api/theme">
      <input type="hidden" name="theme" value={nextTheme} />
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        aria-label={HEADER_LABELS.switchTheme(nextTheme)}
        className="text-foreground/70 hover:text-foreground"
      >
        {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
      </Button>
    </fetcher.Form>
  )
}
