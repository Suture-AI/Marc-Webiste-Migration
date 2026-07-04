import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import BigCta from "../components/BigCta.jsx";
import { RESULT_SECTIONS } from "../data/results.js";

/* Results with verified news footage, featured above the archive.
   Each maps a press-tagged case entry to its broadcast clip. */
const FEATURED_VIDEO = {
  branch: "/media/branch-verdict-cbs8-5pm",
  mauling: "/media/dog-mauling-abc10",
};
const FEATURED = RESULT_SECTIONS.flatMap((s) =>
  s.cases
    .filter((c) => c.press && FEATURED_VIDEO[c.press.case])
    .map((c) => ({ ...c, section: s, media: FEATURED_VIDEO[c.press.case] }))
);

/* Full actual-case-results archive, filterable by charge category. */
export default function Results() {
  const [filter, setFilter] = useState("all");
  usePageMeta({
    title: "Criminal Defense Attorney | Proven Results at MSK Lawyer",
    description:
      "Actual case results from the Law Office of Marc S. Kohnen — not-guilty verdicts, dismissals and reduced charges across DUI, drug, violent-crime, theft and sex-crime cases in San Diego.",
    themeColor: "#05080f",
    bodyBg: "#05080f",
  });

  const shown = RESULT_SECTIONS.filter((s) => filter === "all" || s.key === filter);
  const total = RESULT_SECTIONS.reduce((n, s) => n + s.cases.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Actual Case Results"
        title={<>Results that made <em style={{ color: "var(--gold-2)" }}>headlines</em></>}
        sub={`${total}+ documented outcomes — not-guilty verdicts at trial, outright dismissals and felonies reduced to infractions. These are real cases from the Law Office of Marc S. Kohnen.`}
        crumbs={[["Case Results", null]]}
      />

      {/* wins with the TV footage to prove them */}
      <section className="block" style={{ paddingTop: 64, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-rule">As Seen On TV</span>
            <div className="sec-title">Verdicts that made the news</div>
            <p>Some results speak for themselves — on the evening news. Watch the coverage of these victories.</p>
          </div>
          <div className="featwins">
            {FEATURED.map((f) => (
              <div className="featwin reveal" key={f.press.case}>
                <video controls preload="none" poster={`${f.media.replace("/media/", "/media/posters/")}.jpg`} src={`${f.media}.mp4`} />
                <div className="body">
                  <div className="code">{f.code}</div>
                  <h3>{f.charge}</h3>
                  <div className="outcome">{f.outcome}</div>
                  <div className="links">
                    <Link className="presslink" to={`/in-the-news/?case=${f.press.case}`}>
                      <b aria-hidden="true">&#9654;</b> All coverage of this case
                    </Link>
                    <Link className="presslink ghost" to={f.section.practicePath}>
                      {f.section.practiceLabel} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="filterbar" role="tablist" aria-label="Filter results by charge type">
            <button className={filter === "all" ? "on" : ""} onClick={() => setFilter("all")}>
              All Results
            </button>
            {RESULT_SECTIONS.map((s) => (
              <button
                key={s.key}
                className={filter === s.key ? "on" : ""}
                onClick={() => setFilter(s.key)}
              >
                {s.title}
              </button>
            ))}
          </div>

          {shown.map((s) => (
            <div className="rsec" key={s.key}>
              <h2>{s.title}</h2>
              {s.note && <p className="note">{s.note}</p>}
              <div className="rlist" key={filter /* replay entrance when the filter changes */}>
                {s.cases.map((c, i) => (
                  <div className="rcase" key={i} style={{ animationDelay: `${Math.min(i, 8) * 45}ms` }}>
                    <Link
                      className="cover"
                      to={s.practicePath}
                      aria-label={`${c.charge} — ${c.outcome}. Learn about ${s.practiceLabel}.`}
                    />
                    <div>
                      <div className="code">{c.code}</div>
                      <div className="charge">{c.charge}</div>
                      <span className="go">{s.practiceLabel} &rarr;</span>
                      {c.press && (
                        <Link className="presslink" to={`/in-the-news/?case=${c.press.case}`}>
                          <b aria-hidden="true">&#9654;</b> {c.press.label}
                        </Link>
                      )}
                    </div>
                    <div className="outcome">{c.outcome}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="disclaimer" style={{ borderTop: "1px solid var(--line)", paddingTop: 24 }}>
            Every case is different. Prior results do not guarantee a similar outcome. Charged with
            something you see here? <Link to="/contact-marc/" style={{ color: "var(--gold-2)" }}>Talk to Marc</Link> about
            what&rsquo;s possible in your case.
          </p>
        </div>
      </section>

      <BigCta
        title={<>Your case could be the <em>next result.</em></>}
        text="Free, confidential case evaluation — Marc personally reviews every case that comes through the door."
      />
    </>
  );
}
