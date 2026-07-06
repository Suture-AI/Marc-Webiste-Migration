import { Link, useLocation } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import BigCta from "../components/BigCta.jsx";
import { TOP_AREAS, byKey } from "../data/practiceAreas.js";
import { testimonialFor } from "../data/testimonials.js";

/* Data-driven template for all practice-area pages. `content` modules live
   in src/data/practice/ and carry the copy migrated from msklawyer.com. */
export default function PracticeArea({ content }) {
  const { pathname } = useLocation();
  usePageMeta({
    title: content.metaTitle,
    description: content.metaDescription,
    themeColor: "#05080f",
    bodyBg: "#05080f",
  });

  const area = byKey[content.key] || {};
  const parent = area.parent ? byKey[area.parent] : null;
  const review = testimonialFor(content.key, area.parent);
  const crumbs = [
    ["Practice Areas", "/areas-of-practice/"],
    ...(parent ? [[parent.title, parent.path]] : []),
    [area.title || content.h1, null],
  ];

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow || "San Diego Criminal Defense"}
        title={content.h1}
        sub={content.sub}
        crumbs={crumbs}
      />

      <div className="wrap pagegrid">
        <article className="prose">
          {content.sections.map((s, i) => (
            <section key={i} className="reveal">
              {s.h2 && <h2>{s.h2}</h2>}
              {s.h3 && <h3>{s.h3}</h3>}
              {(s.paras || []).map((p, j) => (
                <p key={j} className={i === 0 && j === 0 ? "lead" : undefined}>{p}</p>
              ))}
              {s.list && (
                <ul>
                  {s.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
              )}
              {s.quote && <blockquote>{s.quote}</blockquote>}
              {s.image && (
                <figure>
                  <img src={s.image.src} alt={s.image.alt} loading="lazy" />
                  {s.image.caption && <figcaption>{s.image.caption}</figcaption>}
                </figure>
              )}
            </section>
          ))}

          <p className="disclaimer reveal" style={{ borderTop: "1px solid var(--line)", paddingTop: 24 }}>
            Legally reviewed by <Link to="/meet-marc/">Marc S. Kohnen</Link>, Attorney at Law —
            State Bar of California #255303, defending San Diego since 2008.
          </p>

          <div className="ctaband reveal">
            <b>Charged in San Diego? Talk to Marc first.</b>
            <p>Free, confidential case evaluation — available 24 hours at (619) 398-2500.</p>
            <div className="hero-cta" style={{ marginTop: 0 }}>
              <a className="btn btn-gold" href="tel:6193982500">Call Now</a>
              <Link className="btn btn-ghost" to="/contact-marc/">Send a Message</Link>
            </div>
          </div>
        </article>

        <aside className="rail">
          <div className="sidecard gold">
            <h3>Free Case Review</h3>
            <p>Marc personally reviews every case. Available 24/7 — the sooner he&rsquo;s on it, the more he can do.</p>
            <a className="btn" href="tel:6193982500">(619) 398-2500</a>
          </div>
          <div className="sidecard">
            <h3>Practice Areas</h3>
            <ul>
              {TOP_AREAS.map((a) => (
                <li key={a.key}>
                  <Link to={a.path} className={pathname === a.path ? "on" : undefined}>{a.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {review && (
            <figure className="sidecard tquote">
              <div className="stars" aria-label="Five star review">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
              <figcaption>{review.name} · Verified Review</figcaption>
            </figure>
          )}
          <div className="sidecard">
            <h3>Proven Results</h3>
            <p>Not-guilty verdicts, dismissals and front-page acquittals — see what Marc has won for clients facing these exact charges.</p>
            <Link className="btn btn-ghost" to="/result/">See Case Results</Link>
          </div>
        </aside>
      </div>

      <BigCta />
    </>
  );
}
