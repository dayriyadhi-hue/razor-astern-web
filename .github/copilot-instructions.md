# GitHub Copilot / AI Agent Instructions

Purpose: short, concrete guidance so an AI coding agent can be productive immediately in this Next.js + Tailwind project.

- **Quick start (dev/build/linters)**
  - Dev server: `npm run dev` (Next.js dev at http://localhost:3000)
  - Build: `npm run build`
  - Start production: `npm run start`
  - Lint: `npm run lint` (runs `eslint`)

- **Big picture architecture**
  - This is a Next.js (v16) app using the App Router under `src/app`.
  - `src/app/layout.js` exports global metadata and imports fonts via `next/font/google` — prefer editing metadata in this file.
  - `src/app/page.js` composes the site by importing presentational and interactive components from `src/components` (e.g., `Navbar`, `Hero`, `Solutions`).
  - Styles: global Tailwind utilities live in `src/app/globals.css` and Tailwind + PostCSS are configured via `postcss.config.mjs`.
  - Static assets (images, video, icons) live in `public/` and are referenced directly with root paths (e.g. `/RAS Video 2026.mp4`, `/RAS Logo.svg`).

- **Component & rendering conventions (project-specific)**
  - Interactive components are client components using the directive `use client`; examples: `src/components/Navbar.js` and `src/components/Hero.js`.
  - Animation library: this project uses `motion/react` (import from `motion/react`) rather than `framer-motion`.
  - Icons: `lucide-react` is used for vector icons (e.g., `X` in `Navbar.js`).
  - Components default-export a single React component function; follow the same file-per-component pattern and PascalCase filenames.
  - Anchor/section conventions: the page uses fragment anchors like `#layanan`, `#proses-kerja`, and `#mengapa-kami` — keep these IDs stable when editing structure.

- **Files to inspect for context (high value)**
  - `src/app/layout.js` — global fonts, metadata, and root layout.
  - `src/app/page.js` — top-level composition of the homepage.
  - `src/components/*` — component implementations and examples of `use client`/Tailwind usage.
  - `src/app/globals.css` — global Tailwind + utility classes.
  - `public/` — media assets referenced by components.

- **Common edits guidance (concrete patterns / examples)**
  - To add an interactive component: create `src/components/MyWidget.js`, start file with `"use client";`, export default the component, and import it from `src/app/page.js` or another client component.
  - To use a public asset: reference it as `/asset-name.ext` (no import necessary for static references in markup).
  - To add fonts or metadata: update `src/app/layout.js` — fonts are configured via `next/font/google` and class variables are applied on the `<body>`.
  - To add animations: import from `motion/react` and use `<motion.div>` with `initial`, `animate`, `exit` props like existing components.

- **Build / compatibility notes**
  - Next version is 16.x and React is 19.x. Ensure environment/node version is compatible with these releases when running `npm install` or CI.
  - There are no tests in the repo. Rely on `next dev` and `next build` to validate runtime/build behavior.

- **What NOT to change without review**
  - Global layout and font metadata in `src/app/layout.js` (affects all pages and SEO/open graph metadata).
  - IDs used for anchors (`#layanan`, `#proses-kerja`, `#mengapa-kami`) — changing them will break navigation anchors and menu links.
  - Public asset filenames referenced directly in markup (video and logo paths) — renaming requires updating references.

- **If you need to add tests or tooling**
  - Add lightweight unit/visual tests only after confirming dev team preferences — none currently exist.
  - Linting uses `eslint`; modify `eslint.config.mjs` if adding rules.

If anything here is unclear or you'd like the instructions to include CI/PR bot rules, tests, or coding style preferences, tell me which area to expand. After your feedback I will iterate on this file.
