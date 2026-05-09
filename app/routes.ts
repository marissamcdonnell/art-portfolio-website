import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
  index("routes/_index.tsx"),
  route("about", "routes/about.tsx"),
  route("oil-paintings", "routes/oil-paintings.tsx"),
  route("other-arts", "routes/other-arts.tsx"),
  route("contact", "routes/contact.tsx"),
  route("api/theme", "routes/api.theme.tsx"),
] satisfies RouteConfig
