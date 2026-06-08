import { useRef, useState } from "react";
import { usePageMeta } from "../hooks/usePageMeta.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "../styles/design4.css";

const PRACTICE = [
  ["01", "DUI & DWI", "Field-sobriety challenges, license hearings and hard negotiation to limit the impact on your life.", "https://msklawyer.com/san-diego-dui-attorney/"],
  ["02", "Drug Crimes", "Possession to trafficking — a strategy built to protect your record and your future.", "https://msklawyer.com/san-diego-criminal-defense-lawyer/drug-crime-attorney/"],
  ["03", "White Collar", "Fraud, embezzlement and federal exposure, handled with discretion and precision.", "https://msklawyer.com/white-collar/"],
  ["04", "Assault & Violence", "Aggressive defense against assault and violent-crime allegations.", "https://msklawyer.com/assault/"],
  ["05", "Homicide", "The highest stakes demand the most relentless, meticulous defense.", "https://msklawyer.com/homicide/"],
  ["06", "Sex Crimes", "Sensitive, private and tenacious representation when your reputation is on the line.", "https://msklawyer.com/sex-crimes/"],
  ["07", "Domestic Violence", "Protecting your rights, your family and your freedom.", "https://msklawyer.com/areas-of-practice/"],
  ["08", "Juvenile Crimes", "Protecting young clients — and the futures ahead of them.", "https://msklawyer.com/juvenile-crimes/"],
];

export default function Design4() {
  const root = useRef(null);
  const [open, setOpen] = useState(false);
  useScrollReveal(root, { groups: 4, stagger: 80 });
  usePageMeta({
    title: "Criminal Defense Attorney In San Diego, CA - Marc S. Kohnen",
    description:
      "Looking for a trusted criminal defense attorney in San Diego, CA? Marc Kohnen, an experienced criminal defense lawyer in San Diego, fights to protect your rights.",
    themeColor: "#05080f",
    bodyBg: "#05080f",
  });
  const close = () => setOpen(false);

  return (
    <div className="d4" ref={root}>
      <div className="citybg" aria-hidden="true" />

      <div className="shell">
        {/* ===== top bar with center crest ===== */}
        <header className="bar">
          <div className="wrap navrow">
            <button className="burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
              <span></span><span></span><span></span>
            </button>

            <div className={`menu${open ? " open" : ""}`} onClick={close}>
              <nav className="nav left">
                <a href="https://msklawyer.com/meet-marc/">About</a>
                <a href="https://msklawyer.com/areas-of-practice/">Practice Areas</a>
                <a href="https://msklawyer.com/result/">Case Results</a>
                <a href="https://msklawyer.com/blog/">Media</a>
              </nav>
              <div className="right">
                <nav className="nav right">
                  <a href="https://msklawyer.com/faq/">FAQ</a>
                  <a href="https://msklawyer.com/contact-marc/">Contact</a>
                </nav>
                <a className="callus" href="tel:6193982500">
                  Call us today<b>(619) 398-2500</b>
                </a>
              </div>
            </div>

            <a className="crest" href="https://msklawyer.com/">
              <img src="/assets/logo.png" alt="Kohnen Law logo" />
              <b>KOHNEN</b>
              <small>LAW</small>
            </a>

            <a className="callbtn" href="tel:6193982500">Call</a>
          </div>
        </header>

        {/* ===== HERO SPLASH (full-bleed San Diego dusk skyline) ===== */}
        <section className="hero">
          <div className="heroshot" aria-hidden="true">
            <div className="photo" />
            <div className="grade" />
            <div className="vignette" />
          </div>

          <div className="wrap herogrid">
            <figure className="figure reveal">
              <div className="frame">
                <img
                  src="/assets/marc-portrait.jpg"
                  alt="San Diego criminal defense attorney Marc S. Kohnen reviewing a case with a client"
                />
              </div>
              <figcaption className="nameplate">
                <b>Marc S. Kohnen</b>
                <span>Criminal Defense Attorney · San Diego, CA</span>
              </figcaption>
            </figure>

            <div className="copy reveal">
              <span className="eyebrow">San Diego Criminal Defense Attorney</span>
              <div className="display" aria-hidden="true">
                The Right Defense
                <span className="line2">Makes all the difference</span>
              </div>
              <h1 className="real">
                Marc Kohnen — the leading <b>Criminal Defense Attorney</b> in San Diego, CA. Putting
                your freedom, liberty and peace of mind first.
              </h1>
              <div className="hero-cta">
                <a className="btn btn-gold" href="https://msklawyer.com/contact-marc/">Free Case Review</a>
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
                <a className="card reveal" href={href} key={no}>
                  <div className="no">{no}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span className="more">Defend this &rarr;</span>
                </a>
              ))}
            </div>
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
              <a className="btn btn-gold" href="https://msklawyer.com/result/" style={{ marginTop: 8 }}>See the Results</a>
            </div>
            <div className="clip reveal">
              <span className="tape">Front Page</span>
              <img src="/assets/group-70.png" alt="San Diego Union-Tribune front page: Acquittal in chokehold case won by Marc Kohnen" />
            </div>
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
              <a className="btn btn-ghost" href="https://msklawyer.com/meet-marc/" style={{ marginTop: 8 }}>Meet Marc Kohnen</a>
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

        {/* ===== BIG CTA ===== */}
        <section className="block bigcta">
          <div className="wrap">
            <div className="sec-title reveal">Don&rsquo;t wait. <em>Get Marc on your side.</em></div>
            <p className="reveal">The sooner Marc is on your case, the more he can do. Get a free, confidential consultation today and let Marc become your voice in the court.</p>
            <div className="hero-cta reveal">
              <a className="btn btn-gold" href="tel:6193982500">Call (619) 398-2500</a>
              <a className="btn btn-ghost" href="https://msklawyer.com/contact-marc/">Contact Marc</a>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="site">
          <div className="wrap">
            <div className="fgridf">
              <div>
                <img className="flogo" src="/assets/footer-logo.png" alt="Kohnen Law" />
                <p style={{ maxWidth: 300 }}>The Law Office of Marc S. Kohnen — aggressive, results-driven criminal defense for all of San Diego County.</p>
                <div className="socials">
                  <a href="https://www.instagram.com/sandiegocriminallawyer/" aria-label="Instagram">IG</a>
                  <a href="https://twitter.com/marcskohnen?lang=en" aria-label="Twitter">X</a>
                  <a href="https://www.youtube.com/c/TheLawOfficeofMarcSKohnenSanDiego/videos" aria-label="YouTube">YT</a>
                </div>
              </div>
              <div>
                <h4>Practice</h4>
                <ul>
                  <li><a href="https://msklawyer.com/areas-of-practice/">Areas of Practice</a></li>
                  <li><a href="https://msklawyer.com/san-diego-criminal-defense-lawyer/">Criminal Defense</a></li>
                  <li><a href="https://msklawyer.com/san-diego-federal-criminal-defense-attorney/white-collar-crime-attorney-san-diego/">Federal Defense</a></li>
                  <li><a href="https://msklawyer.com/san-diego-dui-attorney/">DUI Attorney</a></li>
                </ul>
              </div>
              <div>
                <h4>Firm</h4>
                <ul>
                  <li><a href="https://msklawyer.com/meet-marc/">Meet Marc Kohnen</a></li>
                  <li><a href="https://msklawyer.com/result/">Results</a></li>
                  <li><a href="https://msklawyer.com/blog/">News &amp; Resources</a></li>
                  <li><a href="https://msklawyer.com/faq/">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4>Contact</h4>
                <ul>
                  <li><a href="tel:6193982500">(619) 398-2500</a></li>
                  <li><a href="mailto:marc@msklawyer.com">marc@msklawyer.com</a></li>
                  <li>San Diego, California</li>
                  <li><a href="https://msklawyer.com/contact-marc/">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <p className="disclaimer">
              The Law Office of Marc S. Kohnen. All Rights Reserved 2025. This website is for
              marketing and advertising purposes, per California Marketing Laws, this site shall not
              be deemed or considered legal advice. None of the information on this website, nor the
              access of this website shall create an attorney client relationship. If you have
              questions about a case, please contact our law office directly.
            </p>
            <p className="credit">
              San Diego skyline photograph by{" "}
              <a href="https://www.flickr.com/photos/russellstreet/32963587492/" rel="nofollow">russellstreet</a>,{" "}
              <a href="https://creativecommons.org/licenses/by-sa/2.0" rel="nofollow license">CC BY-SA 2.0</a>.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
