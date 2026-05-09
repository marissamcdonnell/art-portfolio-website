import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  data,
  useRouteLoaderData,
} from "react-router"
import type { Route } from "./+types/root"
import stylesheet from "~/app.css?url"
import { getTheme } from "~/lib/theme.server"
import { SiteHeader } from "~/components/site-header"
import { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION } from "~/lib/seo"

export const meta: Route.MetaFunction = () => [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { property: "og:site_name", content: SITE_NAME },
  { name: "author", content: SITE_NAME },
  // Prevents search engines indexing placeholder content before real art is up.
  // Remove this line once your real paintings are uploaded.
  // { name: "robots", content: "noindex" },
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

export async function loader({ request }: Route.LoaderArgs) {
  const theme = await getTheme(request)
  return data({ theme })
}

export function Layout({ children }: { children: React.ReactNode }) {
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

export default function App() {
  const { theme } = useRouteLoaderData<typeof loader>("root")!

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader theme={theme} />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-border/40 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Marissa McDonnell. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!"
  let details = "An unexpected error occurred."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error"
    details =
      error.status === 404
        ? "The page you're looking for doesn't exist."
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="mb-4 text-4xl font-bold">{message}</h1>
      <p className="mb-8 text-muted-foreground">{details}</p>
      {stack && (
        <pre className="w-full max-w-2xl overflow-x-auto rounded-lg bg-muted p-4 text-left text-xs">
          <code>{stack}</code>
        </pre>
      )}
    </div>
  )
}
