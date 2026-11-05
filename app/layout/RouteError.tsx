import { isRouteErrorResponse } from "react-router"
import { ERROR_LABELS } from "./layout.strings"

const describeError = (error: unknown) => {
  if (isRouteErrorResponse(error)) {
    const notFound = error.status === 404
    return {
      title: notFound ? ERROR_LABELS.notFoundTitle : ERROR_LABELS.errorTitle,
      details: notFound ? ERROR_LABELS.notFound : error.statusText || ERROR_LABELS.details,
      stack: undefined,
    }
  }
  if (import.meta.env.DEV && error instanceof Error) {
    return { title: ERROR_LABELS.title, details: error.message, stack: error.stack }
  }
  return { title: ERROR_LABELS.title, details: ERROR_LABELS.details, stack: undefined }
}

export const RouteError = ({ error }: { error: unknown }) => {
  const { title, details, stack } = describeError(error)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="mb-4 text-4xl font-bold">{title}</h1>
      <p className="mb-8 text-muted-foreground">{details}</p>
      {stack && (
        <pre className="w-full max-w-2xl overflow-x-auto rounded-lg bg-muted p-4 text-left text-xs">
          <code>{stack}</code>
        </pre>
      )}
    </div>
  )
}
