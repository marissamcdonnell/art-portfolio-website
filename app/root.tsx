import type { ReactNode } from "react"
import { Links, Meta, Outlet, Scripts, ScrollRestoration, data, useRouteLoaderData } from "react-router"
import type { Route } from "./+types/root"
import stylesheet from "~/app.css?url"
import { RouteError } from "~/layout/RouteError"
import { SiteFooter } from "~/layout/SiteFooter"
import { SiteHeader } from "~/layout/SiteHeader"
import { SITE_NAME } from "~/site/site.consts"
import { getTheme } from "~/site/theme.server"

export const meta: Route.MetaFunction = () => [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { property: "og:site_name", content: SITE_NAME },
  { name: "author", content: SITE_NAME },
  // Remove once the real bio is in place.
  { name: "robots", content: "noindex, nofollow" },
]

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
]

export const loader = async ({ request }: Route.LoaderArgs) => {
  const theme = await getTheme(request)
  return data({ theme })
}

export const Layout = ({ children }: { children: ReactNode }) => {
  const loaderData = useRouteLoaderData<typeof loader>("root")
  const theme = loaderData?.theme ?? "dark"

  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1a1a1a" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

const App = () => {
  const { theme } = useRouteLoaderData<typeof loader>("root")!

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader theme={theme} />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => <RouteError error={error} />
