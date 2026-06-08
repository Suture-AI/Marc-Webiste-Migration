# Marc S. Kohnen — Website Redesign

Four homepage design concepts for **The Law Office of Marc S. Kohnen** (criminal defense attorney, San Diego, CA), built in **React + Vite** from the content and assets of [msklawyer.com](https://msklawyer.com).

## Designs 

The app is a single React project. A gallery at `/` links to all four homepages, each on its own route:

| Route | Concept | Look & feel |
|-------|---------|-------------|
| `/design-1` | **Professional & Sleek** | Ivory, deep navy and brass; editorial serif (Fraunces / Mulish). Calm, premium, authoritative. |
| `/design-2` | **Modernized Original** | The current site's navy & gold identity and section order, rebuilt clean, fast and mobile-first (Playfair Display / Figtree). |
| `/design-3` | **Bold & Cinematic** | Marc's navy, white & gold brand palette; oversized type and motion, built around the front-page acquittal (Anton / Archivo / Manrope). |
| `/design-4` | **The Kinetic Edition** | A living newspaper — parallax newsprint background, a word-swapping kinetic headline and counter-scrolling breaking-news crawls (Bebas Neue / Archivo / Space Grotesk). |

Every design is fully responsive (verified on web and mobile).

## SEO

All four designs preserve the original msklawyer.com SEO. Per-route metadata is applied via the `usePageMeta` hook:

- Identical `<title>` and meta description
- `theme-color` per design
- The original H1 and every section heading, with the real on-page copy
- Navigation and practice-area links point to the live msklawyer.com URLs, preserving the existing internal link structure

## Project structure

```
index.html              # Vite entry (loads /src/main.jsx)
src/
  main.jsx              # React + Router bootstrap
  App.jsx               # Routes: gallery + four designs
  pages/                # Gallery, Design1–Design4
  components/           # BackToGallery
  hooks/                # usePageMeta, useScrollReveal
  styles/               # base.css + one stylesheet per design
public/assets/          # logo, attorney photos, award badges, front-page clipping
```

## Local development

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview the production build
```
