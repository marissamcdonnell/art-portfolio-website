import { CheckCircle } from "lucide-react"
import { Button } from "~/library/components/Button"
import { SUCCESS_LABELS } from "./contact.strings"

export const ContactSuccess = ({ onReset }: { onReset: () => void }) => (
  <div className="flex flex-col items-start gap-4 rounded-xl border border-border/50 bg-muted/30 p-8">
    <CheckCircle className="size-8 text-green-500" />
    <div>
      <h2 className="text-lg font-semibold">{SUCCESS_LABELS.title}</h2>
      <p className="mt-1 text-muted-foreground">{SUCCESS_LABELS.body}</p>
    </div>
    <Button variant="outline" onClick={onReset}>
      {SUCCESS_LABELS.sendAnother}
    </Button>
  </div>
)
