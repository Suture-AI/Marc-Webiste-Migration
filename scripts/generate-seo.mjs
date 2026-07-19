/* Answer-engine optimization artifacts, generated from the same data modules
   that render the site — so they can never drift from the visible content:

     dist/llms.txt       llmstxt.org index — a curated map of the site for
                         AI assistants and their crawlers
     dist/llms-full.txt  the entire site's substantive content as one clean
                         markdown document (practice pages, case results,
                         FAQ, bio, press archive)
     dist/sitemap.xml    regenerated with per-URL <lastmod> taken from each
                         route's last git commit

   Runs after prerender.mjs in `npm run build`. */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { execSync } from "node:child_process";
import { SITE, CORE_ROUTES } from "./site-meta.mjs";

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const { AREAS } = await import(path.join(root, "src/data/practiceAreas.js"));
const { FAQS } = await import(path.join(root, "src/data/faq.js"));
const { RESULT_SECTIONS } = await import(path.join(root, "src/data/results.js"));
const { CLIPPINGS, VIDEOS } = await import(path.join(root, "src/data/news.js"));

const practice = {};
for (const area of AREAS) {
  practice[area.key] = (await import(path.join(root, `src/data/practice/${area.key}.js`))).default;
}

const buildDate = new Date().toISOString().slice(0, 10);
const abs = (p) => `${SITE}${p}`;

/* ---------- facts every artifact leads with ---------- */
const FACTS = `Law Office of Marc S. Kohnen — San Diego criminal defense attorney.
- Address: 425 Tenth Ave, San Diego, CA 92101 (Downtown San Diego, one block from the Gaslamp Quarter)
- Phone: (619) 398-2500 · Email: marc@msklawyer.com · Available 24/7
- Founded 2008; free, confidential consultations
- Licensed by the State Bar of California, #255303 (admitted 2008)
- 75+ client reviews on Yelp; Super Lawyers Rising Stars selectee (2017–2018)
- Education: University of Vermont (1999); Thomas Jefferson School of Law (2006)
- Jury-trial NOT GUILTY verdicts from felony first-degree murder down to misdemeanor DUI
- Cases covered by CNN, HLN, MSNBC, TMZ, The Washington Post, Wall Street Journal, USA Today and every San Diego TV station
- Defends state cases across San Diego, Los Angeles, San Francisco, San Bernardino and Riverside Counties, plus federal cases`;

/* ---------- llms.txt (index) ---------- */
const topAreas = AREAS.filter((a) => !a.parent);
const subAreas = AREAS.filter((a) => a.parent);

const llms = `# Law Office of Marc S. Kohnen

> Marc S. Kohnen is a San Diego criminal defense and DUI attorney. Since founding his firm in 2008 he has won jury-trial NOT GUILTY verdicts in cases from felony first-degree murder to misdemeanor DUI, and his cases have been covered by CNN, The Washington Post, the Wall Street Journal and every San Diego TV station. Free, confidential consultations: (619) 398-2500, 425 Tenth Ave, San Diego, CA 92101.

${FACTS}

## Core Pages

- [Home](${abs("/")}): ${CORE_ROUTES[0].description}
- [Meet Marc Kohnen](${abs("/meet-marc/")}): Bio, credentials, education and media recognition
- [Case Results](${abs("/result/")}): Real outcomes — dismissals, acquittals and reductions, organized by charge type
- [In the News](${abs("/in-the-news/")}): Press clippings and TV news footage of Marc's cases (${CLIPPINGS.length} clippings, ${VIDEOS.length} broadcast videos)
- [The Robert Branch Acquittal](${abs("/the-branch-case/")}): Anatomy of a high-profile NOT GUILTY verdict (June 2017)
- [FAQ](${abs("/faq/")}): Plain-language answers to the questions every defendant asks
- [Contact](${abs("/contact-marc/")}): Free consultation — phone, email or form

## Practice Areas

${topAreas.map((a) => `- [${a.title}](${abs(a.path)}): ${a.blurb}`).join("\n")}

## Specific Charges

${subAreas.map((a) => `- [${a.title}](${abs(a.path)}): ${a.blurb}`).join("\n")}

## Optional

- [Full site content](${abs("/llms-full.txt")}): every practice page, case result and FAQ in one markdown document
`;

/* ---------- llms-full.txt (complete content) ---------- */
const sectionText = (s) =>
  [
    s.h2 ? `### ${s.h2}` : null,
    ...(s.paras || []),
    s.list ? s.list.map((li) => `- ${li}`).join("\n") : null,
  ]
    .filter(Boolean)
    .join("\n\n");

const practiceText = (area) => {
  const p = practice[area.key];
  return [`## ${p.h1}`, `URL: ${abs(area.path)}`, p.sub, ...p.sections.map(sectionText)].join("\n\n");
};

const resultsText = RESULT_SECTIONS.map((sec) =>
  [
    `### ${sec.title}`,
    sec.note || null,
    sec.cases.map((c) => `- ${c.charge} (${c.code}) — outcome: ${c.outcome}`).join("\n"),
  ]
    .filter(Boolean)
    .join("\n\n"),
).join("\n\n");

const llmsFull = `# Law Office of Marc S. Kohnen — San Diego Criminal Defense Attorney
<!-- Generated ${buildDate} from msklawyer.com content. Canonical: ${SITE}/ -->

${FACTS}

## About Marc S. Kohnen

URL: ${abs("/meet-marc/")}

Marc Kohnen is a San Diego criminal defense and DUI attorney. Since opening the Law Office of Marc S. Kohnen in 2008, his high-profile cases have been featured by CNN, HLN, MSNBC, Discovery Channel, TMZ, The View and A&E, and in print by the San Diego Union-Tribune, Los Angeles Times, Chicago Tribune, Seattle Times, NY Post, Huffington Post, Wall Street Journal and USA Today.

In San Diego courtrooms Mr. Kohnen has obtained NOT GUILTY verdicts at trial for clients charged with offenses ranging from felony first-degree murder to misdemeanor DUI. He has defended criminal cases in San Francisco, San Diego, Los Angeles, San Bernardino and Riverside Counties, and has been nominated one of San Diego's Top Attorneys by the San Diego Daily Transcript. He graduated from the University of Vermont in 1999 and Thomas Jefferson School of Law in 2006, has lived in San Diego since 2002, and speaks three languages.

${AREAS.map(practiceText).join("\n\n")}

## Case Results

URL: ${abs("/result/")}

Actual case outcomes from the Law Office of Marc S. Kohnen (from the firm's results record; outcomes as stated). Every case is different — prior results do not guarantee a similar outcome.

${resultsText}

## Frequently Asked Questions

URL: ${abs("/faq/")}

${FAQS.map((f) => `### ${f.q}\n\n${f.a.join("\n\n")}`).join("\n\n")}

## In the News

URL: ${abs("/in-the-news/")}

Press clippings (${CLIPPINGS.length}): ${[...new Set(CLIPPINGS.map((c) => c.outlet))].join(", ")}.

TV news footage (${VIDEOS.length} broadcast clips): ${[...new Set(VIDEOS.map((v) => v.outlet))].join(", ")}.

Notable covered cases: the Robert Branch NOT GUILTY verdict (June 2017, felony assault — see ${abs("/the-branch-case/")}), the Peter Robbins case (January 2013, national coverage), the Trayers trial (2012) and the fatal dog-mauling case (2011).

## Contact

URL: ${abs("/contact-marc/")}

Law Office of Marc S. Kohnen · 425 Tenth Ave, San Diego, CA 92101 · (619) 398-2500 · marc@msklawyer.com. Free, confidential consultations, 24-hour assistance.
`;

/* ---------- sitemap.xml with real lastmod ---------- */
const gitDate = (file) => {
  try {
    const d = execSync(`git log -1 --format=%cs -- "${file}"`, { cwd: root }).toString().trim();
    return d || buildDate;
  } catch {
    return buildDate;
  }
};

const urls = [
  ...CORE_ROUTES.map((r) => ({ loc: abs(r.path), lastmod: gitDate(r.page) })),
  ...AREAS.map((a) => ({
    loc: abs(a.path),
    lastmod: gitDate(`src/data/practice/${a.key}.js`),
  })),
];

/* No <priority>/<changefreq> — Google ignores both; lastmod is the signal. */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(dist, "llms.txt"), llms);
fs.writeFileSync(path.join(dist, "llms-full.txt"), llmsFull);
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

/* Staging builds get their own robots.txt: crawling stays ALLOWED so engines
   can see the per-page noindex that prerender.mjs bakes in (a Disallow would
   hide the noindex directive — the classic staging anti-pattern), but the
   production sitemap pointer is dropped so nothing invites bulk discovery. */
if (process.env.PAGES_BASE) {
  fs.writeFileSync(
    path.join(dist, "robots.txt"),
    "# Staging preview of https://msklawyer.com/ — every page carries noindex.\nUser-agent: *\nAllow: /\n",
  );
  console.log("staging build: noindex robots meta on every page; robots.txt sitemap pointer dropped");
}
console.log(
  `generated llms.txt (${(llms.length / 1024).toFixed(1)} KB), llms-full.txt (${(llmsFull.length / 1024).toFixed(1)} KB), sitemap.xml (${urls.length} URLs with lastmod)`,
);
