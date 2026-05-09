import { data, redirect } from "react-router"
import type { Route } from "./+types/api.theme"
import { setTheme, type Theme } from "~/lib/theme.server"

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const theme = formData.get("theme") as Theme

  if (theme !== "dark" && theme !== "light") {
    return data({ error: "Invalid theme" }, { status: 400 })
  }

  const cookie = await setTheme(theme, request)

  const referer = request.headers.get("Referer") || "/"
  const url = new URL(referer)

  return redirect(url.pathname + url.search, {
    headers: { "Set-Cookie": cookie },
  })
}
