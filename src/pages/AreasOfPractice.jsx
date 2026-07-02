import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import BigCta from "../components/BigCta.jsx";
import { TOP_AREAS, subsOf } from "../data/practiceAreas.js";

/* Full practice-area taxonomy migrated from msklawyer.com/areas-of-practice/ */
export default function AreasOfPractice() {
  usePageMeta({
    title: "San Diego Criminal Defense Attorney Services - Marc Kohnen",
    description:
      "With a wide variety of criminal defense attorney services in San Diego, Marc Kohnen has the experience and tools to fight for your freedom.",
    themeColor: "#05080f",
    bodyBg: "#05080f",
  });

  return (
    <>
      <PageHero
        eyebrow="Areas of Practice"
        title="Every charge. One focus: your defense."
        sub="The Law Office of Marc S. Kohnen focuses its entire practice on the defense of those accused of crimes — in California state courts and federal court."
        crumbs={[["Practice Areas", null]]}
      />

      <section className="block" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-rule">Recognized. Reviewed. Proven.</span>
            <div className="sec-title">28 practice areas</div>
            <p>
              Mr. Kohnen is licensed in state and federal courts, recognized by AVVO as a top-rated
              criminal defense attorney in San Diego, and chosen by the Yelp community as the
              top-ranked criminal defense lawyer in San Diego with the most 5-star ratings. Marc has
              also appeared on national television for the many high-profile cases he has handled.
              Call today for a free consultation.
            </p>
          </div>

          <div className="areagrid">
            {TOP_AREAS.map((a) => {
              const subs = subsOf(a.key);
              return (
                <div className="areacard reveal" key={a.key}>
                  <Link className="cover" to={a.path} aria-label={a.title} />
                  <h3>{a.title}</h3>
                  <p>{a.blurb}</p>
                  {subs.length > 0 && (
                    <div className="subs" style={{ position: "relative" }}>
                      {subs.map((s) => (
                        <Link key={s.key} to={s.path}>{s.title}</Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <BigCta />
    </>
  );
}
