import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import BigCta from "../components/BigCta.jsx";
import { byKey } from "../data/practiceAreas.js";

/* Practice areas grouped into scannable categories (per Marc — the flat wall
   of boxes was hard to browse). Presentation-only grouping: the registry in
   practiceAreas.js stays the single source of truth for routes/SEO, and every
   page is still linked from here. */
const CATEGORIES = [
  {
    label: "General Criminal Defense",
    blurb: "Every stage of a criminal case — from the first police contact through trial.",
    keys: ["criminal-defense", "warrants"],
  },
  {
    label: "DUI & Driving Offenses",
    blurb: "Drunk-driving charges, DMV license hearings and accident cases.",
    keys: ["dui", "hit-run"],
  },
  {
    label: "Drug Crimes",
    blurb: "From simple possession to sales and trafficking allegations.",
    keys: ["drug-crimes", "drug-possession", "drug-distribution"],
  },
  {
    label: "Federal & Border Crimes",
    blurb: "Cases charged by the U.S. Attorney in the Southern District of California.",
    keys: ["federal", "importation"],
  },
  {
    label: "White Collar & Fraud",
    blurb: "Financial and fraud allegations, handled with discretion.",
    keys: ["white-collar", "identity-theft"],
  },
  {
    label: "Violent Crimes",
    blurb: "Assault, weapons and domestic-violence allegations.",
    keys: ["assault", "violent-crimes", "weapons", "domestic-violence"],
  },
  {
    label: "Homicide",
    blurb: "The most serious charges California prosecutes.",
    keys: ["homicide", "murder", "manslaughter", "vehicular-manslaughter"],
  },
  {
    label: "Sex Crimes",
    blurb: "Discreet defense where reputation and registration are on the line.",
    keys: ["sex-crimes", "child-molestation", "child-pornography", "indecent-exposure"],
  },
  {
    label: "Theft Crimes",
    blurb: "Petty theft to robbery — protecting your record and your future.",
    keys: ["theft", "grand-theft", "robbery"],
  },
  {
    label: "Crimes Involving Minors",
    blurb: "Cases involving children — whether accused or alleged victim.",
    keys: ["child-abuse", "child-endangerment", "juvenile"],
  },
  {
    label: "Diversion Programs",
    blurb: "Treatment instead of prosecution — charges dismissed on completion.",
    keys: ["diversion", "misdemeanor-diversion", "mental-health-diversion", "military-diversion", "drug-diversion"],
  },
];
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
            <div className="sec-title">Criminal defense practice areas</div>
            <p>
              Mr. Kohnen is licensed in California state and federal courts, highly rated by clients
              on Avvo, Yelp and Google, and has appeared on national television for the many
              high-profile cases he has handled. Whatever the charge — from a first misdemeanor to a
              federal indictment — call today for a free consultation.
            </p>
          </div>

          <div className="areagrid">
            {CATEGORIES.map((cat) => {
              const areas = cat.keys.map((k) => byKey[k]).filter(Boolean);
              if (!areas.length) return null;
              return (
                <div className="areacard reveal" key={cat.label}>
                  <Link className="cover" to={areas[0].path} aria-label={cat.label} />
                  <h3>{cat.label}</h3>
                  <p>{cat.blurb}</p>
                  <div className="subs" style={{ position: "relative" }}>
                    {areas.map((a) => (
                      <Link key={a.key} to={a.path}>{a.title}</Link>
                    ))}
                  </div>
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
