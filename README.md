# Marc S. Kohnen — Website Redesign

Three homepage design concepts for **The Law Office of Marc S. Kohnen** (criminal defense attorney, San Diego, CA), rebuilt from the content and assets of [msklawyer.com](https://msklawyer.com).

## Designs

| Folder | Concept | Look & feel |
|--------|---------|-------------|
| [`design-1/`](design-1/) | **Professional & Sleek** | Ivory, deep navy and brass; editorial serif (Fraunces / Mulish). Calm, premium, authoritative. |
| [`design-2/`](design-2/) | **Modernized Original** | The current site's navy & gold identity and section order, rebuilt clean, fast and mobile-first (Playfair Display / Figtree). |
| [`design-3/`](design-3/) | **Bold & Cinematic** | Near-black, bone and crimson; oversized type and motion, built around the front-page acquittal (Anton / Archivo / Manrope). |

`index.html` at the root is a gallery page linking to all three.

## SEO

All three designs preserve the original msklawyer.com SEO **exactly**:

- Identical `<title>`, meta description, Open Graph and Twitter card tags
- `robots: follow, index` and a canonical URL to `https://msklawyer.com/`
- The original H1 and every section heading, with the real on-page copy
- Navigation and practice-area links point to the live msklawyer.com URLs, preserving the existing internal link structure
- Additive `Attorney` JSON-LD structured data (enhances, does not replace, existing SEO)

## Local preview

No build step or dependencies — these are static HTML/CSS/JS files.

```bash
node server.js
# then open http://localhost:5173
```

Or open `index.html` directly in a browser.

## Assets

Shared images (logo, attorney photos, award badges, the San Diego Union-Tribune front page) live in [`assets/`](assets/) and are referenced by all three designs.
