import { AlertCircle } from "lucide-react"

export const FormError = ({ message }: { message: string }) => (
  <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
    <AlertCircle className="size-4 shrink-0" />
    {message}
  </div>
)
