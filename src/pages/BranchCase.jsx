import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import BigCta from "../components/BigCta.jsx";

/* "Anatomy of an Acquittal" — the Robert Branch case, told with the actual
   broadcast footage, courtroom sketches, rally photography and the
   Union-Tribune front page it produced. */
export default function BranchCase() {
  usePageMeta({
    title: "The Robert Branch Acquittal — Anatomy of a NOT GUILTY Verdict | Marc S. Kohnen",
    description:
      "How San Diego criminal defense attorney Marc Kohnen took a felony assault case the whole city was watching to a NOT GUILTY verdict — and the front page of the Union-Tribune.",
    themeColor: "#05080f",
    bodyBg: "#05080f",
  });

  return (
    <>
      <header className="storyhero">
        <div className="wrap reveal">
          <span className="eyebrow">Anatomy of an Acquittal · People v. Branch</span>
          <h1 style={{ marginTop: 14 }}>The verdict that made the front page</h1>
          <p className="sub">
            Two felony charges. Two years of headlines. Twelve jurors — and two words that changed
            Robert Branch&rsquo;s life. This is how Marc Kohnen fought the case all of San Diego was
            watching.
          </p>
        </div>
      </header>

      {/* Chapter 1 — the incident */}
      <section className="chapter">
        <div className="wrap">
          <div className="kicker reveal"><b>01</b><span>The Incident</span></div>
          <h2 className="reveal">A roadside confrontation on Interstate 8 — caught on video.</h2>
          <div className="grid">
            <div className="reveal">
              <p>
                In May 2015, a driving dispute on Interstate 8 ended with Robert Branch — a
                33-year-old security guard — being confronted and placed in a chokehold by a
                plainclothes San Diego sheriff&rsquo;s detective. The cell-phone video ran on every
                station in the county.
              </p>
              <p>
                When the charges came, they landed on Branch: felony assault with a deadly weapon,
                with an allegation of personal infliction of great bodily injury. He was facing the
                fight of his life — and he brought it to Marc Kohnen.
              </p>
            </div>
            <figure className="media reveal">
              <video controls preload="none" poster="/media/posters/branch-cw6-initial-broadcast.jpg" src="/media/branch-cw6-initial-broadcast.mp4" />
              <figcaption>CW6 San Diego — initial broadcast, May 2015</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Chapter 2 — the fight */}
      <section className="chapter">
        <div className="wrap">
          <div className="kicker reveal"><b>02</b><span>The Fight</span></div>
          <h2 className="reveal">Two years of hearings, headlines and pressure — met head-on.</h2>
          <div className="grid">
            <figure className="media reveal">
              <img src="/assets/photos/robert-branch-courthouse-steps-rally-highlight.jpg" alt="Marc Kohnen speaking at a courthouse-steps rally during the Robert Branch case" loading="lazy" />
              <figcaption>On the courthouse steps, downtown San Diego</figcaption>
            </figure>
            <div className="reveal">
              <p>
                The case became a cause. Community organizations rallied on the courthouse steps,
                the Team 10 investigative unit followed every hearing, and Marc stood in front of
                the cameras after each one — telling Branch&rsquo;s side of the story while
                methodically building the defense: self-defense, supported by the very video the
                prosecution relied on.
              </p>
              <p>
                Through bail reviews, preliminary hearings and two years of proceedings, the
                strategy never wavered — take it to a jury.
              </p>
            </div>
          </div>
          <div className="grid">
            <figure className="media reveal">
              <video controls preload="none" poster="/media/posters/branch-abc10-follow-up-interview.jpg" src="/media/branch-abc10-follow-up-interview.mp4" />
              <figcaption>ABC 10News — Team 10 follow-up interview with Marc Kohnen</figcaption>
            </figure>
            <figure className="media reveal">
              <img src="/assets/news/robert-branch-courtroom-sketch.jpg" alt="Courtroom sketch from the Robert Branch trial in San Diego Superior Court" loading="lazy" />
              <figcaption>Courtroom sketch — San Diego Superior Court</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Chapter 3 — the verdict */}
      <div className="verdictband reveal">
        <div className="wrap">
          <div className="ng">Not Guilty</div>
          <div className="on">On all charges · June 23, 2017</div>
        </div>
      </div>

      <section className="chapter">
        <div className="wrap">
          <div className="kicker reveal"><b>03</b><span>The Verdict</span></div>
          <h2 className="reveal">&ldquo;I&rsquo;m just happy the jury saw it the same way we have all along.&rdquo;</h2>
          <div className="grid">
            <div className="reveal">
              <p>
                On June 23, 2017, the jury acquitted Robert Branch of every charge. Marc&rsquo;s
                words to the press that afternoon — quoted in the Union-Tribune — said it plainly:
                the jury saw what the defense had seen from day one.
              </p>
              <p>
                Every station in San Diego led with the verdict. Watch the coverage as it aired.
              </p>
              <div className="hero-cta" style={{ marginTop: 20 }}>
                <Link className="btn btn-gold" to="/in-the-news/?case=branch">All Branch Case Coverage</Link>
              </div>
            </div>
            <figure className="media reveal">
              <video controls preload="none" poster="/media/posters/branch-verdict-cbs8-5pm.jpg" src="/media/branch-verdict-cbs8-5pm.mp4" />
              <figcaption>CBS 8 — verdict report, 5pm, June 23, 2017</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Chapter 4 — the front page */}
      <section className="chapter" style={{ paddingBottom: 96 }}>
        <div className="wrap">
          <div className="kicker reveal"><b>04</b><span>The Front Page</span></div>
          <h2 className="reveal">The next morning, the whole city read the result.</h2>
          <div className="grid">
            <figure className="media reveal" style={{ maxWidth: 480 }}>
              <img src="/assets/news/robert-branch-not-guilty-headline.jpg" alt="San Diego Union-Tribune headline: Acquittal in 'Chokehold' Case" loading="lazy" />
              <figcaption>San Diego Union-Tribune — June 24, 2017</figcaption>
            </figure>
            <div className="reveal">
              <p>
                &ldquo;Acquittal in &lsquo;Chokehold&rsquo; Case.&rdquo; Ask any other attorney if
                they&rsquo;ve ever put a not-guilty verdict on the front page.
              </p>
              <p>
                Every case is different, and prior results don&rsquo;t guarantee an outcome. But
                when everything is on the line, this is what fighting a case all the way looks
                like.
              </p>
              <div className="hero-cta" style={{ marginTop: 20 }}>
                <Link className="btn btn-ghost" to="/result/">See All Case Results</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BigCta
        title={<>Facing your own fight? <em>Bring it to Marc.</em></>}
        text="Free, confidential case evaluation with the attorney who takes cases all the way — available 24 hours at (619) 398-2500."
      />
    </>
  );
}
