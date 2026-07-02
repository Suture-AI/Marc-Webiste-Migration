import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import BigCta from "../components/BigCta.jsx";
import { RESULT_SECTIONS } from "../data/results.js";

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
              <div className="rlist">
                {s.cases.map((c, i) => (
                  <div className="rcase reveal" key={i}>
                    <div>
                      <div className="code">{c.code}</div>
                      <div className="charge">{c.charge}</div>
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
