import { Link, useLocation } from "react-router"
import { cn } from "~/library/utils/cn"
import { NAV_LINKS } from "./layout.strings"

type NavLinksProps = {
  linkClassName: string
  activeClassName: string
  inactiveClassName: string
}

export const NavLinks = ({ linkClassName, activeClassName, inactiveClassName }: NavLinksProps) => {
  const location = useLocation()

  return NAV_LINKS.map((link) => (
    <Link
      key={link.href}
      to={link.href}
      className={cn(
        linkClassName,
        location.pathname === link.href ? activeClassName : inactiveClassName
      )}
    >
      {link.label}
    </Link>
  ))
}
