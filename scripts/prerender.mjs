/* Bakes real HTML + per-page meta/OG/canonical/JSON-LD into dist/ for every
   route, so crawlers and link previews never depend on JavaScript.
   Runs after `vite build` + the SSR bundle build (see package.json). */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

import { SITE, CORE_ROUTES } from "./site-meta.mjs";

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");

const { render } = await import(path.join(root, "dist-server/entry-server.js"));
const { AREAS } = await import(path.join(root, "src/data/practiceAreas.js"));

/* per-route meta — practice pages pull theirs from the content modules */
const routes = CORE_ROUTES.map((r) => ({ ...r }));

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

/* Entity graph shared by every page: the firm (an Attorney/LegalService) and
   Marc himself as a Person with verifiable credentials. Linked @ids let
   per-page LegalService nodes reference the firm without repeating it. */
const FIRM_ID = `${SITE}/#firm`;
const MARC_ID = `${SITE}/#marc`;

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": FIRM_ID,
      name: "Law Office of Marc S. Kohnen",
      description:
        "San Diego criminal defense law firm founded in 2008 by Marc S. Kohnen — DUI, drug, violent-crime, theft, sex-crime and federal defense with jury-trial NOT GUILTY verdicts. Free, confidential consultations 24/7.",
      slogan: "High Stakes Defense. Proven Results.",
      foundingDate: "2008",
      founder: { "@id": MARC_ID },
      image: `${SITE}/assets/og-card.jpg`,
      logo: `${SITE}/assets/kohnen-law-logo.png`,
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
      areaServed: [
        { "@type": "AdministrativeArea", name: "San Diego County, CA" },
        { "@type": "City", name: "San Diego" },
      ],
      openingHours: "Mo-Su 00:00-24:00",
      knowsAbout: AREAS.map((a) => `${a.title} defense`),
      sameAs: [
        "https://www.instagram.com/sandiegocriminallawyer/",
        "https://twitter.com/marcskohnen",
        "https://www.youtube.com/c/TheLawOfficeofMarcSKohnenSanDiego/videos",
        "https://www.avvo.com/attorneys/92101-ca-marc-kohnen-1754991.html",
        "https://www.yelp.com/biz/law-office-of-marc-s-kohnen-san-diego-2",
        "https://profiles.superlawyers.com/california/san-diego/lawyer/marc-kohnen/3aa5d94f-86d9-41de-894f-fe9066d2b1ac.html",
      ],
    },
    {
      "@type": "Person",
      "@id": MARC_ID,
      name: "Marc S. Kohnen",
      jobTitle: "Criminal Defense Attorney",
      worksFor: { "@id": FIRM_ID },
      url: `${SITE}/meet-marc/`,
      image: `${SITE}/assets/marc-portrait.jpg`,
      telephone: "+1-619-398-2500",
      email: "marc@msklawyer.com",
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of Vermont" },
        { "@type": "CollegeOrUniversity", name: "Thomas Jefferson School of Law" },
      ],
      memberOf: {
        "@type": "Organization",
        name: "State Bar of California",
        url: "https://apps.calbar.ca.gov/attorney/Licensee/Detail/255303",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Juris Doctor, Thomas Jefferson School of Law (2006)",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          name: "Licensed attorney, State Bar of California #255303 (admitted 2008)",
          url: "https://apps.calbar.ca.gov/attorney/Licensee/Detail/255303",
        },
      ],
      award: [
        "Super Lawyers Rising Stars selectee (2017–2018)",
        "Nominated Top Attorney by the San Diego Daily Transcript",
      ],
      knowsAbout: AREAS.map((a) => `${a.title} defense`),
      sameAs: [
        "https://apps.calbar.ca.gov/attorney/Licensee/Detail/255303",
        "https://www.avvo.com/attorneys/92101-ca-marc-kohnen-1754991.html",
        "https://profiles.superlawyers.com/california/san-diego/lawyer/marc-kohnen/3aa5d94f-86d9-41de-894f-fe9066d2b1ac.html",
        "https://www.linkedin.com/in/attorneymarckohnen/",
        "https://www.instagram.com/sandiegocriminallawyer/",
        "https://twitter.com/marcskohnen",
      ],
    },
  ],
});

/* Per-practice-page structured data: the specific legal service plus a
   breadcrumb trail (practice registry `parent` keys drive the nesting). */
const areaByKey = Object.fromEntries(AREAS.map((a) => [a.key, a]));
function practiceSchemas(area) {
  const crumbs = [{ name: "Home", item: `${SITE}/` }];
  if (area.parent && areaByKey[area.parent]) {
    const p = areaByKey[area.parent];
    crumbs.push({ name: p.title, item: `${SITE}${p.path}` });
  }
  crumbs.push({ name: area.title, item: `${SITE}${area.path}` });
  return [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: `${area.title} Defense — Law Office of Marc S. Kohnen`,
      serviceType: `${area.title} criminal defense`,
      description: area.blurb,
      url: `${SITE}${area.path}`,
      provider: { "@id": FIRM_ID },
      areaServed: { "@type": "AdministrativeArea", name: "San Diego County, CA" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: c.item,
      })),
    },
  ];
}

/* VideoObject markup for the broadcast archive on /in-the-news/ — the TV
   footage is one of Marc's strongest trust signals, and video schema is the
   only way crawlers learn what each clip shows. Dates are the case dates. */
const { VIDEOS, videoSrc, videoPoster } = await import(path.join(root, "src/data/news.js"));
const CASE_DATES = { branch: "2017-06-09", robbins: "2013-01-22", trayers: "2012-06-01", mauling: "2011-06-01" };
const newsSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "TV news coverage of Marc S. Kohnen's criminal defense cases",
    itemListElement: VIDEOS.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VideoObject",
        name: `${v.outlet}: ${v.title}`,
        description: `${v.outlet} coverage — ${v.title}. San Diego criminal defense attorney Marc S. Kohnen.`,
        contentUrl: `${SITE}${videoSrc(v)}`,
        thumbnailUrl: `${SITE}${videoPoster(v)}`,
        ...(CASE_DATES[v.case] ? { uploadDate: CASE_DATES[v.case] } : {}),
      },
    })),
  },
];

for (const area of AREAS) {
  const mod = await import(path.join(root, `src/data/practice/${area.key}.js`));
  routes.push({
    path: area.path,
    title: mod.default.metaTitle,
    description: mod.default.metaDescription,
    extraSchemas: practiceSchemas(area),
  });
}
routes.find((r) => r.path === "/in-the-news/").extraSchemas = newsSchemas;

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
    <script type="application/ld+json">${SCHEMA}</script>${(r.extraSchemas || [])
    .map((s) => `\n    <script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("")}`;

  const appHtml = render((process.env.PAGES_BASE || "/").replace(/\/$/, "") + r.path);
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
