import { Moon, Sun } from "lucide-react"
import { useFetcher } from "react-router"
import { Button } from "~/components/ui/button"
import type { Theme } from "~/lib/theme.server"

export function ThemeToggle({ theme }: { theme: Theme }) {
  const fetcher = useFetcher()

  const nextTheme = theme === "dark" ? "light" : "dark"

  return (
    <fetcher.Form method="post" action="/api/theme">
      <input type="hidden" name="theme" value={nextTheme} />
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        aria-label={`Switch to ${nextTheme} mode`}
        className="text-foreground/70 hover:text-foreground"
      >
        {theme === "dark" ? (
          <Sun className="size-5" />
        ) : (
          <Moon className="size-5" />
        )}
      </Button>
    </fetcher.Form>
  )
}
