export const ENGINEERING_TEXT = {
  metaTitle: "Engineering",
  metaDescription:
    "Marissa McDonnell is a software engineer building media platforms at Minute and maker tools on the side.",
  eyebrow: "The Engineer",
  heading: "Engineering",
  intro: [
    "I'm a software engineer at Minute, where I've built the in-house platform behind FanSided, 90min, The Players' Tribune, and Sports Illustrated since 2017.",
    "Before code, I earned a BFA in sculpture. I still think in three dimensions, and I still like making things people can hold.",
  ],
  workHeading: "At Minute",
  sideProjectsHeading: "Side projects",
  inProgress: "In progress",
  githubLabel: "GitHub",
} as const

export const GITHUB_URL = "https://github.com/marissamcdonnell"

export const WORK_HIGHLIGHTS = [
  "Designed the data structure that connects our page builder to our Qwik renderer.",
  "Owned the migration of our site-facing renderer to Qwik, end to end.",
  "Built the registration walls, paywalls, and social logins behind our conversion flows.",
] as const

export type Project = {
  name: string
  summary: string
  stack: string[]
  url?: string
  inProgress?: boolean
}

export const SIDE_PROJECTS: Project[] = [
  {
    name: "Goomi Lab",
    summary:
      "Build a stuffed animal from crochet shapes, see it in 3D, and get back a real amigurumi pattern you can make. Every pattern is hand-verified, because AI gets stitch math wrong.",
    stack: ["React 19", "React Three Fiber", "Konva", "Zustand", "Zod"],
    inProgress: true,
  },
  {
    name: "BuffCake",
    summary:
      "Feed a little cake fruits and snacks and watch it get buff. A revival of SquishFruits, my first dev project, rebuilt as my playground for LLM features and an MCP server.",
    stack: ["React", "TypeScript", "Vercel", "Claude API"],
    inProgress: true,
  },
]
