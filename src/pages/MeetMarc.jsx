import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import BigCta from "../components/BigCta.jsx";
import Lightbox from "../components/Lightbox.jsx";

/* Attorney bio migrated from msklawyer.com/meet-marc/, expanded with the
   press-conference photo series Marc supplied. */
const GALLERY = Array.from({ length: 15 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/assets/photos/marc-kohnen-courthouse-press-conference-${n}.jpg`,
    title: "Addressing the press — San Diego Superior Court",
    outlet: "Robert Branch case, 2016",
    alt: `San Diego criminal defense attorney Marc Kohnen speaking with reporters outside the downtown San Diego courthouse (photo ${i + 1} of 15)`,
  };
});

export default function MeetMarc() {
  const [zoom, setZoom] = useState(null);
  usePageMeta({
    title: "Marc S. Kohnen - San Diego Criminal Defense Attorney",
    description:
      "Meet Marc, San Diego Criminal Defense Attorney with decades of criminal law experience. Get the best defense for your situation when you call for an evaluation.",
    themeColor: "#05080f",
    bodyBg: "#05080f",
  });

  return (
    <>
      <PageHero
        eyebrow="Attorney · Advocate · Adviser"
        title="Meet Marc S. Kohnen"
        sub="When your freedom is on the line, you need someone to lean on."
        crumbs={[["Meet Marc", null]]}
      />

      <div className="wrap pagegrid">
        <article className="prose">
          <section className="reveal">
            <h2>San Diego Criminal Defense Attorney Marc S. Kohnen</h2>
            <p className="lead">
              Marc Kohnen is San Diego&rsquo;s premier criminal defense and DUI attorney. Since
              opening the Law Office of Marc S. Kohnen in 2008, his high-profile cases have been
              featured and reported on by the national news media on CNN, HLN, MSNBC, Discovery
              Channel, TMZ, The View and A&amp;E, among many other national channels and shows.
            </p>
            <p>
              In local news, attorney Marc Kohnen and his cases have been featured on San
              Diego&rsquo;s CBS, ABC, NBC and FOX affiliates. He has been quoted in national print
              media regarding his criminal defense expertise, and his cases have been featured in
              local newspapers such as the San Diego Union-Tribune, Los Angeles Times, Chicago
              Tribune, Seattle Times and NY Post, in addition to national print publications such
              as the Huffington Post, Wall Street Journal and USA Today.
            </p>
            <p>
              In San Diego courtrooms Mr. Kohnen has obtained NOT GUILTY verdicts at trial for
              clients charged with offenses ranging from felony first-degree murder to misdemeanor
              DUI. Within the state of California he has defended criminal cases in the courtrooms
              of San Francisco, San Diego, Los Angeles, San Bernardino and Riverside Counties,
              bringing a wealth of courtroom and trial experience obtained fighting prosecutors
              throughout the state. Marc Kohnen has been nominated as one of San Diego&rsquo;s Top
              Attorneys by the San Diego Daily Transcript, and featured as a criminal defense
              speaker at local law schools.
            </p>
          </section>

          <section className="reveal">
            <h2>The person behind the advocate</h2>
            <p>
              Marc Kohnen grew up both in the United States and abroad, and he speaks three
              languages. He has dealt with the incarceration of a family member first-hand, as well
              as the aftermath of imprisonment, and understands how it feels to be up against the
              justice system.
            </p>
            <p>
              Prior to attending law school Marc worked as an assistant college football coach in
              Pennsylvania. He graduated from the University of Vermont in 1999, and Thomas
              Jefferson School of Law in 2006. He has been a San Diego resident since 2002. In his
              spare time he enjoys recreational sports, spending time with family, traveling and
              reading.
            </p>
            <figure>
              <img
                src="/assets/photos/marc-kohnen-courthouse-hallway-not-guilty.jpg"
                alt="Criminal defense attorney Marc Kohnen walking through the San Diego courthouse after a not-guilty verdict"
                loading="lazy"
              />
              <figcaption>Leaving court after a NOT GUILTY verdict</figcaption>
            </figure>
          </section>

          <section className="reveal">
            <h2>Recognized by clients and peers</h2>
            <ul>
              <li>
                <a href="https://www.google.com/search?q=Google+reviews+marc+kohnen" rel="noopener">
                  Amazing Google reviews &amp; testimonials
                </a>
              </li>
              <li>
                <a href="https://www.avvo.com/attorneys/92101-ca-marc-kohnen-1754991.html" rel="noopener">
                  10.0 AVVO criminal defense rating — state &amp; federal defense lawyer
                </a>
              </li>
              <li>
                <a href="https://www.yelp.com/biz/law-office-of-marc-s-kohnen-san-diego-2" rel="noopener">
                  Dozens of five-star client reviews on Yelp
                </a>
              </li>
            </ul>
          </section>
        </article>

        <aside className="rail">
          <div className="sidecard" style={{ padding: 0, border: 0, background: "none" }}>
            <img
              src="/assets/marc-portrait.jpg"
              alt="San Diego criminal defense attorney Marc S. Kohnen reviewing a case file"
              style={{ border: "8px solid var(--bone)", boxShadow: "0 34px 70px -30px #000" }}
            />
          </div>
          <div className="sidecard gold">
            <h3>We offer 24-hour assistance</h3>
            <p>425 Tenth Ave, San Diego, CA 92101<br />marc@msklawyer.com</p>
            <a className="btn" href="tel:6193982500">(619) 398-2500</a>
          </div>
          <div className="sidecard">
            <h3>See the record</h3>
            <p>Front-page acquittals, national headlines and dozens of documented results.</p>
            <Link className="btn btn-ghost" to="/result/" style={{ marginBottom: 10 }}>Case Results</Link>
            <Link className="btn btn-ghost" to="/in-the-news/">In the News</Link>
          </div>
        </aside>
      </div>

      {/* courthouse press-conference series */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-rule">On the Courthouse Steps</span>
            <div className="sec-title">Where the work happens</div>
            <p>Marc addressing the press outside San Diego Superior Court during the Robert Branch trial — the case that put a NOT GUILTY verdict on the front page.</p>
          </div>
          <div className="photogrid">
            {GALLERY.map((g) => (
              <button key={g.src} className="reveal" onClick={() => setZoom(g)} aria-label={`Enlarge: ${g.alt}`}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox item={zoom} onClose={() => setZoom(null)} />
      <BigCta />
    </>
  );
}
