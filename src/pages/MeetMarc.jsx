import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import BigCta from "../components/BigCta.jsx";
import Lightbox from "../components/Lightbox.jsx";

/* Attorney bio migrated from msklawyer.com/meet-marc/. Gallery is a curated
   set of DISTINCT moments (press conference, counsel table, verdict day) —
   Marc asked that it not repeat near-identical frames of the same scene. */
const GALLERY = [
  {
    src: "/assets/photos/marc-kohnen-courthouse-press-conference-08.jpg",
    title: "Addressing the press — San Diego Superior Court",
    outlet: "Robert Branch case",
    alt: "San Diego criminal defense attorney Marc Kohnen answering reporters' questions outside the downtown San Diego courthouse",
  },
  {
    src: "/assets/photos/marc-kohnen-robert-branch-courtroom.jpg",
    title: "At the counsel table with his client",
    outlet: "Robert Branch trial",
    alt: "Marc Kohnen conferring with client Robert Branch at the counsel table during trial",
  },
  {
    src: "/assets/photos/robert-branch-not-guilty-celebration.jpg",
    title: "Verdict day — NOT GUILTY on all counts",
    outlet: "San Diego Superior Court",
    alt: "Marc Kohnen and Robert Branch in the courthouse hallway after the not-guilty verdict",
  },
  {
    src: "/assets/photos/not-guilty-press-conference-post-trial.jpg",
    title: "Post-trial press conference",
    outlet: "Robert Branch acquittal",
    alt: "Marc Kohnen speaking at the press conference following the Robert Branch acquittal",
  },
  {
    src: "/assets/photos/robert-branch-courthouse-steps-rally-highlight.jpg",
    title: "Courthouse-steps rally",
    outlet: "Robert Branch case",
    alt: "Supporters rally with Marc Kohnen on the San Diego courthouse steps during the Robert Branch case",
  },
  {
    src: "/assets/photos/peter-robbins-press-conference.jpg",
    title: "Peter Robbins press conference",
    outlet: "The Charlie Brown case, 2013",
    alt: "Marc Kohnen addressing cameras at the Peter Robbins press conference",
  },
];

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
                Licensed by the State Bar of California since 2008 — license #255303
              </li>
              <li>
                <a href="https://maps.google.com/?cid=2204679681952717993" rel="noopener">
                  Amazing Google reviews &amp; testimonials
                </a>
              </li>
              <li>
                <a href="https://www.avvo.com/attorneys/92101-ca-marc-kohnen-1754991.html" rel="noopener">
                  Highly rated on Avvo — five-star client reviews and peer endorsements, state &amp; federal defense
                </a>
              </li>
              <li>
                <a href="https://www.yelp.com/biz/law-office-of-marc-s-kohnen-san-diego-2" rel="noopener">
                  75+ client reviews on Yelp — dozens of them five-star
                </a>
              </li>
              <li>
                <a href="https://profiles.superlawyers.com/california/san-diego/lawyer/marc-kohnen/3aa5d94f-86d9-41de-894f-fe9066d2b1ac.html" rel="noopener">
                  Super Lawyers Rising Stars selectee (2017&ndash;2018) — San Diego criminal defense
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
            <p>From the counsel table to the courthouse steps — moments from the cases that made headlines, including the Robert Branch trial that put a NOT GUILTY verdict on the front page.</p>
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
