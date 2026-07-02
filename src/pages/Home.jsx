import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import BigCta from "../components/BigCta.jsx";

const PRACTICE = [
  ["01", "DUI & DWI", "Field-sobriety challenges, license hearings and hard negotiation to limit the impact on your life.", "/san-diego-dui-attorney/"],
  ["02", "Drug Crimes", "Possession to trafficking — a strategy built to protect your record and your future.", "/san-diego-criminal-defense-lawyer/drug-crime-attorney/"],
  ["03", "White Collar", "Fraud, embezzlement and federal exposure, handled with discretion and precision.", "/white-collar/"],
  ["04", "Assault & Violence", "Aggressive defense against assault and violent-crime allegations.", "/assault/"],
  ["05", "Homicide", "The highest stakes demand the most relentless, meticulous defense.", "/homicide/"],
  ["06", "Sex Crimes", "Sensitive, private and tenacious representation when your reputation is on the line.", "/sex-crimes/"],
  ["07", "Domestic Violence", "Protecting your rights, your family and your freedom.", "/domestic-violence/"],
  ["08", "Juvenile Crimes", "Protecting young clients — and the futures ahead of them.", "/juvenile-crimes/"],
];

const HOME_PRESS = [
  {
    src: "/assets/press/marc-kohnen-nbc7-millete-murder-trial.jpg",
    alt: "Criminal defense attorney Marc Kohnen providing legal commentary on the Millete murder trial for NBC 7 San Diego",
    title: "Millete Murder Trial Commentary",
    outlet: "NBC 7 San Diego",
  },
  {
    src: "/assets/press/marc-kohnen-cnn-newsroom-interview.jpg",
    alt: "San Diego criminal defense lawyer Marc Kohnen interviewed live on CNN Newsroom",
    title: "Live Case Analysis",
    outlet: "CNN Newsroom",
  },
  {
    src: "/assets/press/marc-kohnen-abc10-team-10-interview.jpg",
    alt: "Marc Kohnen interviewed by the ABC 10News Team 10 investigative unit",
    title: "Team 10 Investigates",
    outlet: "ABC 10News",
  },
];

export default function Home() {
  usePageMeta({
    title: "Criminal Defense Attorney In San Diego, CA - Marc S. Kohnen",
    description:
      "Looking for a trusted criminal defense attorney in San Diego, CA? Marc Kohnen, an experienced criminal defense lawyer in San Diego, fights to protect your rights.",
    themeColor: "#05080f",
    bodyBg: "#05080f",
  });

  return (
    <>
      {/* ===== HERO SPLASH (full-bleed San Diego dusk skyline) ===== */}
      <section className="hero">
        <div className="heroshot" aria-hidden="true">
          <div className="photo" />
          <div className="grade" />
          <div className="vignette" />
        </div>

        <div className="wrap herogrid">
          <figure className="figure cutout reveal">
            <img
              src="/assets/marc-kohnen-attorney-cutout.png"
              alt="San Diego criminal defense attorney Marc S. Kohnen standing against the San Diego skyline"
            />
            <figcaption className="nameplate">
              <b>Marc S. Kohnen</b>
              <span>Criminal Defense Attorney · San Diego, CA</span>
            </figcaption>
          </figure>

          <div className="copy reveal">
            <span className="eyebrow">San Diego Criminal Defense Attorney</span>
            <div className="display" aria-hidden="true">
              High Stakes Defense
              <span className="line2">Proven Results</span>
            </div>
            <h1 className="real">
              Marc Kohnen — the leading <b>Criminal Defense Attorney</b> in San Diego, CA. Putting
              your freedom, liberty and peace of mind first.
            </h1>
            <div className="hero-cta">
              <Link className="btn btn-gold" to="/contact-marc/">Free Case Review</Link>
              <a className="btn btn-ghost" href="tel:6193982500">Call (619) 398-2500</a>
            </div>
            <div className="trust">
              <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span><b>5.0</b> on Yelp &amp; Google</span>
              <span className="dot">·</span>
              <span><b>13+</b> Years Defending the Accused</span>
            </div>
          </div>
        </div>

        <a className="scrollcue" href="#defend" aria-label="Scroll to practice areas">
          <span>Explore</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15m0 0l-6-6m6 6l6-6" /></svg>
        </a>
      </section>

      {/* ===== AS SEEN ON (national media) ===== */}
      <div className="outlets" aria-label="Media outlets that have covered Marc Kohnen's cases">
        <span>CNN</span>
        <span>NBC</span>
        <span>ABC</span>
        <span>CBS 8</span>
        <span>FOX 5</span>
        <span>The Washington Post</span>
        <span>Wall Street Journal</span>
        <span>NY Post</span>
        <span>Union-Tribune</span>
        <span>TMZ</span>
      </div>

      {/* ===== PRACTICE AREAS (services cards) ===== */}
      <section className="block services" id="defend">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-rule">Comprehensive Criminal Defense</span>
            <div className="sec-title">What we defend</div>
            <p>From a first-time charge to the most serious felony, every case gets a meticulous, individually-built defense.</p>
          </div>
          <div className="cards">
            {PRACTICE.map(([no, title, desc, href]) => (
              <Link className="card reveal" to={href} key={no}>
                <div className="no">{no}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="more">Defend this &rarr;</span>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 28 }}>
            <Link className="btn btn-ghost" to="/areas-of-practice/">All 28 Practice Areas</Link>
          </p>
        </div>
      </section>

      {/* ===== QUOTE BAND ===== */}
      <section className="block quoteband">
        <div className="wrap">
          <div className="q">
            &ldquo;The prosecutor was trying to pin 21 counts and 10 years on my brother. Marc got
            it down to <span>3 counts and 3 years.</span> Thank you for the wonderful work you were
            able to do.&rdquo;
          </div>
          <div className="who">Teena E. · Verified Review</div>
        </div>
      </section>

      {/* ===== FRONT-PAGE FEATURE ===== */}
      <section className="block feature">
        <div className="wrap fgrid">
          <div className="reveal">
            <span className="sec-rule">Providing Legal Insight Like Never Before</span>
            <h2>Ask any other attorney if they&rsquo;ve ever put a <span className="hi">not&nbsp;guilty</span> verdict on the front page.</h2>
            <p>Most lawyers promise the world. Marc has the headlines to prove it — including a San Diego Union-Tribune front-page acquittal.</p>
            <p>When your freedom is on the line, experience and results are everything. With Marc by your side, you avoid a permanent criminal record and keep your reputation intact.</p>
            <Link className="btn btn-gold" to="/result/" style={{ marginTop: 8 }}>See the Results</Link>
          </div>
          <div className="clip reveal">
            <span className="tape">Front Page</span>
            <img src="/assets/group-70.png" alt="San Diego Union-Tribune front page: Acquittal in chokehold case won by Marc Kohnen" />
          </div>
        </div>
      </section>

      {/* ===== IN THE NEWS TEASER ===== */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-rule">In the News</span>
            <div className="sec-title">The attorney the cameras turn to</div>
            <p>From CNN to the Washington Post, Marc&rsquo;s cases — and his commentary — make national headlines.</p>
          </div>
          <div className="vidgrid">
            {HOME_PRESS.map((p) => (
              <Link className="vidcard reveal" to="/in-the-news/" key={p.title}>
                <img src={p.src} alt={p.alt} loading="lazy" style={{ aspectRatio: "16 / 9", objectFit: "cover", width: "100%" }} />
                <div className="meta">
                  <b>{p.title}</b>
                  <span>{p.outlet}</span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 28 }}>
            <Link className="btn btn-ghost" to="/in-the-news/">Press, Headlines &amp; TV Appearances</Link>
          </p>
        </div>
      </section>

      {/* ===== BY THE NUMBERS ===== */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-rule">By the Numbers</span>
            <div className="sec-title">A record that speaks</div>
          </div>
          <div className="numbers">
            <div className="n reveal"><b>13+</b><span>Years Defending</span></div>
            <div className="n reveal"><b>5.0&#9733;</b><span>Yelp &amp; Google</span></div>
            <div className="n reveal"><b>1000s</b><span>Cases Handled</span></div>
            <div className="n reveal"><b>24/7</b><span>Available to You</span></div>
          </div>
        </div>
      </section>

      {/* ===== MEET MARC ===== */}
      <section className="block meet">
        <div className="wrap fgrid">
          <div className="ph reveal">
            <img src="/assets/untitled33.png" alt="Marc S. Kohnen working at his San Diego criminal defense law office" />
            <div className="badge"><b>13+</b>Years in San Diego courts</div>
          </div>
          <div className="reveal">
            <span className="sec-rule">Meet Marc</span>
            <h2>A relentless advocate who actually reads your file.</h2>
            <p>As a highly-acclaimed criminal defense attorney in San Diego, Marc has defended highly complex criminal cases over the years — even representing Hollywood celebrities. He believes everyone deserves the right to defend themselves.</p>
            <p>Carrying glowing recommendations and 5-star Yelp reviews, Marc understands the emotionally rattling experience you&rsquo;re going through, and is here to deliver the high-quality results that earned his reputation.</p>
            <Link className="btn btn-ghost" to="/meet-marc/" style={{ marginTop: 8 }}>Meet Marc Kohnen</Link>
          </div>
        </div>
      </section>

      {/* ===== BADGES ===== */}
      <div className="creds">
        <div className="wrap">
          <img src="/assets/badge-71.png" alt="Super Lawyers" />
          <img src="/assets/badge-72.png" alt="AVVO Excellent Top Attorney" />
          <img src="/assets/badge-70.png" alt="National Association of Criminal Defense Lawyers" />
          <img src="/assets/badge-73.png" alt="National College for DUI Defense" />
          <img src="/assets/badge-74.png" alt="People Love Us on Yelp" />
          <img src="/assets/badge-69.png" alt="Review us on Google" />
        </div>
      </div>

      <BigCta />
    </>
  );
}
