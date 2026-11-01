import type { ReactElement } from "react"
import { Label } from "~/library/components/Label"

type FormFieldProps = {
  id: string
  label: string
  children: ReactElement
}

export const FormField = ({ id, label, children }: FormFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    {children}
  </div>
)
