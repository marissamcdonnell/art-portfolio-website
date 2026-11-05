import { Link } from "react-router"
import { Button } from "~/library/components/Button"
import { COMMISSION_LABELS } from "./home.strings"

export const CommissionCta = () => (
  <section className="border-t border-border/40 bg-muted/30 px-4 py-16 sm:px-6">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">{COMMISSION_LABELS.title}</h2>
      <p className="mb-8 text-muted-foreground">{COMMISSION_LABELS.body}</p>
      <Button asChild size="lg">
        <Link to="/contact">{COMMISSION_LABELS.cta}</Link>
      </Button>
    </div>
  </section>
)
