/* Bakes real HTML + per-page meta/OG/canonical/JSON-LD into dist/ for every
   route, so crawlers and link previews never depend on JavaScript.
   Runs after `vite build` + the SSR bundle build (see package.json). */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const SITE = "https://msklawyer.com";

const { render } = await import(path.join(root, "dist-server/entry-server.js"));
const { AREAS } = await import(path.join(root, "src/data/practiceAreas.js"));

/* per-route meta — practice pages pull theirs from the content modules */
const routes = [
  {
    path: "/",
    title: "Criminal Defense Attorney In San Diego, CA - Marc S. Kohnen",
    description:
      "Looking for a trusted criminal defense attorney in San Diego, CA? Marc Kohnen, an experienced criminal defense lawyer in San Diego, fights to protect your rights.",
  },
  {
    path: "/meet-marc/",
    title: "Marc S. Kohnen - San Diego Criminal Defense Attorney",
    description:
      "Meet Marc, San Diego Criminal Defense Attorney with decades of criminal law experience. Get the best defense for your situation when you call for an evaluation.",
  },
  {
    path: "/areas-of-practice/",
    title: "San Diego Criminal Defense Attorney Services - Marc Kohnen",
    description:
      "With a wide variety of criminal defense attorney services in San Diego, Marc Kohnen has the experience and tools to fight for your freedom.",
  },
  {
    path: "/result/",
    title: "Criminal Defense Attorney | Proven Results at MSK Lawyer",
    description:
      "Actual case results from the Law Office of Marc S. Kohnen — not-guilty verdicts, dismissals and reduced charges across DUI, drug, violent-crime, theft and sex-crime cases in San Diego.",
  },
  {
    path: "/in-the-news/",
    title: "In the News - San Diego Criminal Defense Attorney Marc S. Kohnen",
    description:
      "CNN, the Washington Post, the Today Show, TMZ and every San Diego station — see the national and local press coverage of Marc Kohnen's criminal defense cases.",
  },
  {
    path: "/faq/",
    title: "FAQs - Criminal Defense Attorney",
    description:
      "Even if you are innocent, the state government has several resources to use against you in court. That's why it's essential to have an expert criminal defense",
  },
  {
    path: "/contact-marc/",
    title: "Contact Marc Kohnen For San Diego Criminal Defense",
    description:
      "Get in touch with Marc Kohnen, experienced Criminal Defense attorney that you can rely on to fight for your rights and freedom.",
  },
  {
    path: "/the-branch-case/",
    title: "The Robert Branch Acquittal — Anatomy of a NOT GUILTY Verdict | Marc S. Kohnen",
    description:
      "How San Diego criminal defense attorney Marc Kohnen took a felony assault case the whole city was watching to a NOT GUILTY verdict — and the front page of the Union-Tribune.",
  },
];

for (const area of AREAS) {
  const mod = await import(path.join(root, `src/data/practice/${area.key}.js`));
  routes.push({ path: area.path, title: mod.default.metaTitle, description: mod.default.metaDescription });
}

/* Baked to dist/404.html — Vercel serves it (with a real 404 status) for any
   unknown URL, since every legitimate route above exists as a static file. */
routes.push({
  path: "/404/",
  outFile: "404.html",
  noindex: true,
  title: "Page Not Found - Marc S. Kohnen, San Diego Criminal Defense",
  description:
    "The page you're looking for doesn't exist. Find San Diego criminal defense resources from the Law Office of Marc S. Kohnen.",
});

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Law Office of Marc S. Kohnen",
  image: `${SITE}/assets/og-card.jpg`,
  url: `${SITE}/`,
  telephone: "+1-619-398-2500",
  email: "marc@msklawyer.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "425 Tenth Ave",
    addressLocality: "San Diego",
    addressRegion: "CA",
    postalCode: "92101",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 32.70977, longitude: -117.15756 },
  areaServed: "San Diego County, CA",
  openingHours: "Mo-Su 00:00-24:00",
  sameAs: [
    "https://www.instagram.com/sandiegocriminallawyer/",
    "https://twitter.com/marcskohnen",
    "https://www.youtube.com/c/TheLawOfficeofMarcSKohnenSanDiego/videos",
    "https://www.avvo.com/attorneys/92101-ca-marc-kohnen-1754991.html",
    "https://www.yelp.com/biz/law-office-of-marc-s-kohnen-san-diego-2",
    "https://profiles.superlawyers.com/california/san-diego/lawyer/marc-kohnen/3aa5d94f-86d9-41de-894f-fe9066d2b1ac.html",
  ],
});

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const template = fs.readFileSync(path.join(root, "dist/index.html"), "utf8");
let count = 0;

for (const r of routes) {
  const canonical = `${SITE}${r.path}`;
  const head = `${r.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${canonical}" />`}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Law Office of Marc S. Kohnen" />
    <meta property="og:title" content="${esc(r.title)}" />
    <meta property="og:description" content="${esc(r.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${SITE}/assets/og-card.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(r.title)}" />
    <meta name="twitter:description" content="${esc(r.description)}" />
    <meta name="twitter:image" content="${SITE}/assets/og-card.jpg" />
    <script type="application/ld+json">${SCHEMA}</script>`;

  const appHtml = render(r.path);
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[\s\S]*?("\s*\/>)/, `$1${esc(r.description)}$2`)
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  if (r.outFile) {
    fs.writeFileSync(path.join(root, "dist", r.outFile), html);
  } else {
    const outDir = path.join(root, "dist", r.path === "/" ? "" : r.path);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html);
  }
  count++;
}

console.log(`pre-rendered ${count} routes`);
