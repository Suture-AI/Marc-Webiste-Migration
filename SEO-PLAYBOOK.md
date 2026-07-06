# Marc Kohnen — SEO & AI-Visibility Playbook

Compiled July 2026 from two deep research passes (AEO/GEO state of play; legal
local SEO + an audit of Marc's actual online footprint). Every claim below
traces to a measured study or an official platform doc — vendor hype was
filtered out. This file is the working checklist; the on-site items marked ✅
are already implemented in this repo.

---

## How AI assistants actually pick a lawyer (the plumbing)

Different engines run on different rails — optimizing one doesn't cover the others:

| Engine | What it reads | What moves the needle |
|---|---|---|
| **ChatGPT** | Live **Bing** search (top ~20–30 results) + **Foursquare** places + a **Yelp** licensing deal (Feb 2026) | Bing Places listing, Facebook & Yelp reviews, presence on directory listicles it cites (Three Best Rated 24%, Expertise.com 18% of local citations) |
| **Perplexity** | **Yelp Places API** (formal deal) + Reddit-heavy web index | Yelp profile quality/review volume above all |
| **Google AI Overviews / AI Mode / Gemini** | Ordinary Google index + **Google Business Profile/Maps** grounding | Classic local SEO: GBP, reviews, page-1 rankings, topical depth |
| **Claude** | Its own web search (Claude-SearchBot) | Server-rendered content, the same directory/press footprint |
| **Siri / Apple Intelligence** | Applebot + **Apple Business Connect** | Claimed Apple Business listing (~58% of US businesses never claim theirs) |

Two structural facts from the studies:
- **AI crawlers do not execute JavaScript** (Vercel/MERJ, 500M+ fetches, zero JS
  rendering by GPTBot/ClaudeBot/PerplexityBot). Only server-rendered HTML is
  visible to them. *Our site prerenders all 36 routes — already covered.* ✅
- **Seven directories control virtually all AI lawyer recommendations**
  (5WPR/Haute Lawyer 2026): Chambers, Legal 500, Super Lawyers, Best Lawyers,
  Martindale, Avvo, Justia. For a solo practice the actionable four are
  **Avvo, Justia, Martindale, Super Lawyers** — plus Expertise.com and Yelp
  for the local layer.

---

## 🔴 Priority 0 — accuracy fixes (legal-compliance risk, do before launch)

1. **The site claims "AVVO Superb 9.7" — Marc's Avvo rating is now 7.3 "Very Good."**
   Cause: a 2023 State Bar discipline record ("Discipline, Probation; no Actual
   Suspension," CA Bar #255303 — publicly visible on both his Cal Bar page and
   Avvo). Under CA Rule of Professional Conduct 7.1, advertising the stale 9.7
   is a false/misleading-communication risk, and AI assistants *can read the
   Avvo page*, so the mismatch also burns credibility with the exact systems
   we're optimizing for.
   - Places the 9.7 appears: home-page stat block (`src/pages/Home.jsx`),
     Meet Marc (`src/pages/MeetMarc.jsx`), DUI page copy (`src/data/practice/dui.js`).
   - The new AI-facing artifacts (JSON-LD, llms.txt) already use only verified
     claims (bar number, Yelp volume, Rising Stars 2017–18). ✅
   - **Needs Marc's decision**: replace the badge with verified claims
     (Yelp volume, bar record, press archive) and decide whether/how the site
     acknowledges the discipline. Pull the Cal Bar case documents first.
2. **"Super Lawyers selectee"** — his profile shows **Rising Stars 2017–2018
   only**, no current selection. Word it as "Super Lawyers Rising Stars,
   2017–2018" wherever it appears.
3. **Stale NAP on Martindale and FindLaw**: both still show the old
   **1350 Columbia St, Ste 700** address. Update to 425 Tenth Ave — NAP
   inconsistency is an active negative signal.
4. Any "13 years of experience" copy → admitted 2008, so **18 years** (make it
   self-updating like the home stat block already is).

## 🟠 Priority 1 — free profile blitz (the AI plumbing, ~a day of work, $0)

- [ ] **Justia** — Marc has **no profile**. Free, passes followed links,
      syndicates to Cornell LII, and Justia holds page 1 for "best criminal
      lawyers San Diego." Highest-leverage single gap. justia.com/marketing/lawyer-directory/
- [ ] **Bing Places** — ChatGPT rides Bing; claim and fully populate.
- [ ] **Apple Business Connect** — feeds Siri/Apple Maps.
- [ ] **Foursquare** — powers ChatGPT's mapped local results.
- [ ] **Facebook business page** — the #1 review source ChatGPT sees via Bing.
- [ ] **Expertise.com** — not on their San Diego list (18 firms); legal is one
      of two categories where you can *request* editorial review, free:
      expertise.com/review-me
- [ ] **Martindale AV Peer Review rating** — free to pursue (3+ years at bar);
      currently 1 review, no peer rating.
- [ ] Refresh **Avvo** (claimed, keep answering Q&A) and **Super Lawyers** profiles.
- [ ] Verify **Google Business Profile** ownership and audit per below.

## 🟠 Priority 2 — Google Business Profile (feeds Google AI surfaces)

- Primary category: **"Criminal justice attorney"** (Whitespark's #1 local-pack
  factor). Secondaries: DUI attorney, Trial attorney, Attorney, Law firm.
- **Fill every predefined Service** (measurable rank gains within days in
  Sterling Sky's tests — their test case was literally a lawyer adding DUI).
- Hours: list **24/7** if calls are genuinely answered (open-at-search-time is
  now a top-5 factor; the site already advertises 24-hour assistance).
- GBP landing page: point at the strongest-ranking practice page, not
  necessarily the homepage.
- Skip as ranking plays: Posts (zero effect in controlled tests), Q&A
  (being phased out Nov 2025+), photo volume (conversion only).

## 🟡 Priority 3 — the review engine (the currency Marc lacks vs competitors)

Competitors who win the AI answers (Sevens Legal, David P. Shapiro) have
600–800+ Google reviews; velocity/recency beats total count, and gaps hurt.

- Steady cadence: ask **every satisfied client**, alternating Google ↔ Yelp
  (Yelp feeds both Perplexity and OpenAI via licensing deals).
- Rules (bar ethics + Google's April 2026 policy + FTC 2024 rule): never
  incentivize, never draft the review, never gate/filter who you ask, and
  **never confirm someone was a client when replying** (confidentiality).
- Facebook reviews matter more than intuition suggests — first among review
  sources ChatGPT encounters via Bing.

## 🟡 Priority 4 — content roadmap (what earns AI citations)

Measured mechanics to apply to every new/updated page:
- **Answer-first**: 44% of LLM citations extract from the first 30% of a page.
  Open each page/section with a direct 1–2 sentence answer; retrieval is
  chunk-level (~256–512 tokens), so every H2 section must stand alone.
- **Question-style H2s** mirroring People-Also-Ask phrasing (PAA co-occurs with
  AI Overviews 90% of the time). Legal is the #1 AIO-triggering niche.
- **Statistics, quotations and cited sources**: +33%, +41%, +28% visibility in
  the only peer-reviewed GEO study (KDD 2024); statistics worked best for law
  topics. Penalty tables keyed to Penal Code sections are the perfect format.
- **Freshness is real**: AI-cited URLs are ~26% fresher. Visible
  "Last updated" dates + genuine refreshes; the blog has been dormant since 2021.
- **E-E-A-T kit for YMYL**: attorney byline and "Legally reviewed by
  Marc S. Kohnen, CA Bar #255303" on every substantive page; cite actual
  statutes; results pages keep the Rule 7.1 disclaimer (already present ✅).
- Page types that win: **San Diego-specific process guides** ("What happens
  after a DUI arrest in San Diego," "San Diego Superior Court: what to
  expect") and one page per charge — which the site already has (28 pages ✅).
- **Brand mentions beat backlinks** (r=0.66 vs 0.22 for AI visibility):
  local news quotes, bar-association activity, podcasts, YouTube (the single
  strongest correlate, r=0.74 — Marc has a dormant YouTube channel and 47
  broadcast clips that could seed it).
- Don't bother: keyword stuffing (measured −9%), Reddit astroturfing
  (r/legaladvice bans referrals; reputational landmine), paid directory tiers
  (no study shows they affect AI citations), FAQ markup for rich results
  (Google killed the feature May 2026 — the visible Q&A content is what counts).

## What's already implemented in this repo ✅

| Piece | Where | Why |
|---|---|---|
| Prerendered HTML, all 36 routes + real 404s | `scripts/prerender.mjs` | AI crawlers don't run JS; this is the #1 technical requirement |
| Entity graph: `LegalService` firm + `Person` Marc with bar license, credentials, `sameAs` to Cal Bar/Avvo/Super Lawyers/LinkedIn | `scripts/prerender.mjs` | Entity reconciliation for Google/Bing knowledge panels; `Attorney` type is deprecated |
| Per-practice `LegalService` + `BreadcrumbList` JSON-LD | `scripts/prerender.mjs` | Semantic signal per charge page; helps Copilot (Bing confirmed schema use) |
| `VideoObject` markup for the 47 broadcast clips | `scripts/prerender.mjs` | Only way crawlers learn what the TV footage shows |
| `robots.txt` explicitly allowing every verified 2026 AI crawler (search + training) | `public/robots.txt` | Blocking search bots = invisible in AI answers |
| `llms.txt` + `llms-full.txt`, auto-generated from site data on every build | `scripts/generate-seo.mjs` | Honest caveat: studies show ~zero AI consumption today — kept because it's zero-maintenance and future-proof, not because it moves rankings |
| `sitemap.xml` with real per-URL `<lastmod>` from git history | `scripts/generate-seo.mjs` | Freshness signal; AI crawlers 404 ~4× more than Googlebot, clean maps matter |
| FAQPage JSON-LD + FAQ data module | `src/pages/Faq.jsx`, `src/data/faq.js` | Rich result is dead but the extractable Q&A content is the AEO asset |

All of it regenerates on every `npm run build` — content and SEO artifacts
can't drift apart.

## Monitoring (optional, when ready to spend)

Entry-level AI-visibility trackers: **Otterly.AI** ($29/mo), **Knowatoa**
($59/mo, includes Claude), **Profound Starter** ($99/mo, ChatGPT only);
free snapshot: HubSpot AEO Grader. Measurement floor: ChatGPT appends
`utm_source=chatgpt.com` (desktop only) — GA4's new "AI Assistants" channel
tracks ChatGPT/Gemini/Copilot but **not Claude or Perplexity** (those land in
Referral). Cheapest viable start: quarterly manual spot-checks — ask ChatGPT,
Claude and Perplexity "best criminal defense attorney in San Diego" +
per-charge variants and record who gets named.
