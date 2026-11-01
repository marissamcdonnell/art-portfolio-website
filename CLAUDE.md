# marissamcdonnell.com: code standards

Art portfolio with one Engineering page. Art stays the star. Same principles as Goomi Lab.

## Commands

```sh
pnpm install
pnpm dev          # http://localhost:5173
pnpm typecheck    # React Router typegen + tsc
pnpm build
pnpm art:upload   # compress and upload new art, then paste the output into app/art/artworks.ts
```

## Where code goes

- `app/routes`: thin route modules: `meta`, `loader`, `action`, and a component that puts feature
  pieces together. Logic and markup belong in the feature folder. Routes are registered in
  `app/routes.ts`.
- Feature folders, each with its own strings file (and types or server code when it needs them):
  - `app/art/`: artwork data (`artworks.ts`), the gallery, `ArtImage`, `CollectionPage`, and
    `utils/` for queries and structured data.
  - `app/home/`, `app/about/`, `app/contact/`, `app/engineering/`: one folder per page.
- `app/layout`: app shell (`SiteHeader`, `NavLinks`, `MobileNav`, `ThemeToggle`, `SiteFooter`,
  `RouteError`). `app/root.tsx` puts it together.
- `app/site`: site-wide config: `site.consts.ts` (URLs, email, socials), `site.strings.ts`,
  `seo.ts`, `theme.server.ts`.
- `app/library`: reusable code only, in `components/` and `utils/`. shadcn components go in
  `library/components/`, with no `ui/` subfolder. `library` never imports from features, `layout`,
  `site`, or `routes`.
- Server-only code ends in `.server.ts`. Never import it from a component, not even for a type.
  Put shared types in a `*.types.ts` file.
- Use the `~/` alias for imports across folders and `./` within a folder.
- Keep the folder structure flat. Don't bury files in deep nesting.

## Code style

- Write all functions as arrow functions, including components and route modules.
- Use named imports from React (`useState`, `type ReactNode`), not `React.useState`.
- No index (barrel) files. Import directly from the file.
- Use named exports. Default exports are only for route components, because React Router requires
  them.
- Prettier sets the format (`.prettierrc`): no semicolons.
- Flag anything that doesn't follow current React and JS best practice.

## Components

- One job per component. If it does two things, split it.
- UI text lives in the feature's strings file (e.g. `HERO_LABELS` in `home/home.strings.ts`), not
  inline in JSX. Site-wide words go in `site/site.strings.ts`.
- Use shadcn for UI components, and delete variants the site doesn't use.
- Use `library/components/Button.tsx` for buttons. Use `asChild` to style a link as a button.
- Use `library/components/PageHeading.tsx` for the eyebrow + title at the top of a page.

## Content

- Never invent facts about Mars. Bio, artist statement, and background placeholders stay in
  brackets until she writes them.
- The site stays `noindex` (in `app/root.tsx`) until the About page has her real bio.

## Comments

- Only comment what can't be read from the code: why, units, a gotcha, a math trick.
- No comments that restate the code or narrate what a line does.

## Before opening a PR

- `pnpm typecheck && pnpm build` pass, and every page loads in `pnpm dev` in light and dark mode.
- If packages couldn't be installed, say so in the PR description and list what wasn't run.
