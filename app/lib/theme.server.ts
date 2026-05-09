import { createCookieSessionStorage } from "react-router"

export type Theme = "dark" | "light"

const THEME_COOKIE = "theme"

const { getSession, commitSession } = createCookieSessionStorage({
  cookie: {
    name: THEME_COOKIE,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cr3t-theme-cookie"],
    secure: process.env.NODE_ENV === "production",
  },
})

export async function getTheme(request: Request): Promise<Theme> {
  const session = await getSession(request.headers.get("Cookie"))
  const theme = session.get(THEME_COOKIE)
  return theme === "light" ? "light" : "dark"
}

export async function setTheme(theme: Theme, request: Request) {
  const session = await getSession(request.headers.get("Cookie"))
  session.set(THEME_COOKIE, theme)
  return commitSession(session)
}
