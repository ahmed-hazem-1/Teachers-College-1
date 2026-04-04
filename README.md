# Teachers College Landing Page

A modern, single-page React + TypeScript landing page for an English academy brand. The app is structured for maintainability, with each major section split into dedicated components, content data files, and small reusable hooks.

## Table of Contents

- Overview
- Features
- Tech Stack
- Project Structure
- Section Map
- Responsive Strategy
- Getting Started
- Environment Variables
- Available Scripts
- Deployment
- Customization Guide
- Quality and Validation
- Troubleshooting
- Notes

## Overview

The project is a Vite-powered React SPA with:

- a fixed responsive navbar
- section-based navigation with active scroll tracking
- animated hero and testimonial experiences
- responsive layout behavior from mobile through desktop
- Tailwind CSS v4 theming

Main composition order:

1. Home (Hero)
2. Introduction (Video)
3. Methodology (Features)
4. Testimonials
5. Trial Lesson (CTA)

## Features

- Refactored architecture (no monolithic `App.tsx` page logic)
- Scroll-spy navbar that highlights the active section while scrolling
- Anchor navigation aligned to real section IDs
- Mobile and tablet responsive behavior across all sections
- Animated content using Motion (`motion/react`)
- Iconography via Lucide React
- Data-driven section content for easier future edits

## Tech Stack

- React 19
- TypeScript (strict mode enabled)
- Vite 6
- Tailwind CSS v4
- Motion (Framer Motion package family)
- Lucide React icons

## Project Structure

```text
.
|-- src/
|   |-- App.tsx
|   |-- main.tsx
|   |-- index.css
|   |-- logo.png
|   |-- vite-env.d.ts
|   |-- pages/
|   |   `-- HomePage.tsx
|   |-- components/
|   |   |-- layout/
|   |   |   |-- Navbar.tsx
|   |   |   `-- Footer.tsx
|   |   |-- shared/
|   |   |   `-- SectionBadge.tsx
|   |   `-- sections/
|   |       |-- Hero/
|   |       |   |-- Hero.tsx
|   |       |   |-- hero.data.ts
|   |       |   `-- useRotatingWords.ts
|   |       |-- VideoIntro/
|   |       |   `-- VideoIntro.tsx
|   |       |-- Features/
|   |       |   |-- Features.tsx
|   |       |   `-- features.data.ts
|   |       |-- Testimonials/
|   |       |   |-- Testimonials.tsx
|   |       |   |-- testimonials.data.ts
|   |       |   `-- useTestimonialCarousel.ts
|   |       `-- CTA/
|   |           `-- CTA.tsx
|   `-- types/
|       `-- content.ts
|-- public/
|-- index.html
|-- package.json
|-- tsconfig.json
`-- vite.config.ts
```

## Section Map

Navbar and anchor targets are aligned to these IDs:

- `#home` -> `Hero`
- `#introduction` -> `VideoIntro`
- `#methodology` -> `Features`
- `#testimonials` -> `Testimonials`
- `#trial-lesson` -> `CTA`

The navbar also includes:

- desktop vs mobile menu behavior by breakpoint
- active section highlighting through scroll-spy logic

## Responsive Strategy

The UI uses Tailwind breakpoints with responsive class variants (`sm`, `md`, `lg`, `xl`, `2xl`).

Current behavior includes:

- full-width fixed navbar
- desktop nav shown at `xl+`, mobile menu below `xl`
- anchor scroll offset support via `scroll-margin-top` on `section[id]`
- Hero badge and floating element adjustments for narrow viewports
- Testimonials controls optimized for mobile and desktop separately
- CTA button becomes full-width on smaller devices

Global anchor offset is defined in `src/index.css`:

- base: `scroll-margin-top: 6.5rem`
- `sm+`: `scroll-margin-top: 7.5rem`

## Getting Started

### Prerequisites

- Node.js 18+ (Node 20+ recommended)
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app runs on:

- `http://localhost:3000`

## Environment Variables

An `.env.example` file is included.

Defined variables:

- `GEMINI_API_KEY`
- `APP_URL`
- `VITE_BASE_PATH` (optional; defaults to `/`)

For local setup:

1. Copy `.env.example` to `.env.local`.
2. Set values as needed for your environment.

Note: the current landing page UI does not directly consume AI endpoints, but `vite.config.ts` exposes `process.env.GEMINI_API_KEY` for future use.

`VITE_BASE_PATH` controls the public base path used by Vite at build time:

- Use `/` when deploying at domain root.
- Use `/<repo-name>/` when deploying a project site on GitHub Pages.
- Use `/<subfolder>/` when deploying under a subdirectory on shared hosting.

## Available Scripts

From `package.json`:

- `npm run dev` - Start local Vite dev server on port 3000.
- `npm run build` - Create production build in `dist/`.
- `npm run preview` - Preview production build locally.
- `npm run lint` - Run TypeScript checks (`tsc --noEmit`).
- `npm run clean` - Remove `dist/` (`rm -rf dist`, POSIX style command).

## Deployment

This project is prepared for multiple deployment styles:

- static hosting (Hostinger, cPanel, shared hosting, object storage)
- GitHub Pages (workflow included)
- container hosting (for Cloud Run and similar platforms)

### 1. Generic Static Hosting (Recommended Default)

Build locally:

```bash
npm ci
npm run build
```

Deploy contents of `dist/` to your hosting root.

If your site is served from a subfolder, build with base path:

```bash
VITE_BASE_PATH=/your-subfolder/ npm run build
```

### 2. Hostinger / cPanel Shared Hosting

1. Run `npm run build` locally.
2. Open your hosting File Manager.
3. Upload the contents of `dist/` into `public_html` (or your target folder).
4. If using a subfolder, rebuild with `VITE_BASE_PATH=/subfolder/` before upload.

Because this app is a single-page landing page (no client-side route paths), no rewrite rules are required for normal operation.

### 3. GitHub Pages

Included automation:

- `.github/workflows/deploy-gh-pages.yml`
- `public/.nojekyll`

Setup steps:

1. Push to the `main` branch.
2. In repository settings, enable Pages with GitHub Actions as source.
3. The workflow builds and deploys automatically.

Default workflow base path is `/<repo-name>/`.

If your repository is a user/organization site (served at root), change workflow env:

```yaml
VITE_BASE_PATH: /
```

### 4. GCP Static Hosting (Cloud Storage + CDN)

1. Build locally: `npm run build`
2. Create a bucket and enable static website hosting.
3. Upload `dist/` contents.
4. Optionally put Cloud CDN / Load Balancer in front for TLS and caching.

Use `VITE_BASE_PATH=/` unless serving from a prefixed path.

### 5. GCP Cloud Run (Container)

Included files:

- `Dockerfile`
- `.dockerignore`

Build and run locally:

```bash
docker build -t teachers-college-site .
docker run --rm -p 8080:80 teachers-college-site
```

Deploy to Cloud Run:

1. Build container image and push to Artifact Registry.
2. Deploy image to Cloud Run.
3. Set service to allow unauthenticated access if public site is required.

## Customization Guide

### Update Academy Content

- Hero rotating words/images: `src/components/sections/Hero/hero.data.ts`
- Feature cards: `src/components/sections/Features/features.data.ts`
- Testimonials: `src/components/sections/Testimonials/testimonials.data.ts`

### Update Navigation

Edit nav labels and section IDs in:

- `src/components/layout/Navbar.tsx`

If you add/remove sections, keep IDs synchronized with each `<section id="...">` target.

### Update Theme Tokens

Design tokens are in:

- `src/index.css` inside `@theme`

Current tokens:

- `--color-navy`
- `--color-red`
- `--font-sans`

### Add a New Section

1. Create a folder under `src/components/sections/`.
2. Add a section component with a unique `id`.
3. Import and render it in `src/pages/HomePage.tsx`.
4. Add a matching nav item in `src/components/layout/Navbar.tsx`.
5. Optionally add footer quick links in `src/components/layout/Footer.tsx`.

## Quality and Validation

Recommended checks before merge/deploy:

```bash
npm run lint
npm run build
```

Manual checks:

- verify section anchors do not land under the fixed header
- verify navbar active state updates while scrolling
- verify no horizontal overflow on mobile widths
- verify testimonial controls are usable on mobile and desktop

## Troubleshooting

- If TypeScript complains about JSX intrinsic types, ensure `@types/react` and `@types/react-dom` are installed.
- If anchor scroll position feels off, adjust `scroll-margin-top` in `src/index.css`.
- If desktop navbar feels crowded, adjust display breakpoint (`xl`) or nav chip spacing in `src/components/layout/Navbar.tsx`.
- If `npm run clean` fails on Windows shell, run it via Git Bash/WSL or replace with a cross-platform command.

## Notes

- This repository currently contains some dependencies (for example `express`, `dotenv`, `@google/genai`) that are not actively used by the visible landing page flow.
- Keeping these is fine for future expansion, but you can remove unused packages if you want a slimmer frontend-only install.
