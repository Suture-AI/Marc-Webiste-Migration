import { useRef, useState, useEffect } from "react";
import { usePageMeta } from "../hooks/usePageMeta.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import BackToGallery from "../components/BackToGallery.jsx";
import "../styles/design4.css";

const VERDICTS = ["NOT GUILTY", "DISMISSED", "ACQUITTED", "CHARGES DROPPED", "CASE CLOSED"];

const CRAWL_TOP = [
  "DUI & DWI Defense", "Drug Crimes", "Homicide", "Sex Crimes", "White Collar",
  "Domestic Violence", "Federal Defense", "Assault", "Theft", "Weapons Charges", "Juvenile Crimes",
];
const CRAWL_BOTTOM = [
  "Front-Page Acquittals", "13+ Years in San Diego Courts", "5.0★ Yelp & Google",
  "Available 24 / 7", "Free Confidential Consultation", "Innocent Until Proven Guilty",
  "Thousands of Cases Defended",
];

function CrawlTrack({ items, kind }) {
  const row = (
    <span className="crawl-track" aria-hidden="false">
      {items.map((t, i) => (
        <span key={i}>
          <span className="star">{kind === "top" ? "■" : "★"}</span> {t}
        </span>
      ))}
    </span>
  );
  // duplicate the track so the -50% / 0% loop is seamless
  return (
    <>
      {row}
      <span className="crawl-track" aria-hidden="true">
        {items.map((t, i) => (
          <span key={i}>
            <span className="star">{kind === "top" ? "■" : "★"}</span> {t}
          </span>
        ))}
      </span>
    </>
  );
}

export default function Design4() {
  const root = useRef(null);
  const [open, setOpen] = useState(false);
  const [vIdx, setVIdx] = useState(0);
  useScrollReveal(root, { groups: 3, stagger: 90 });
  usePageMeta({
    title: "Criminal Defense Attorney In San Diego, CA - Marc S. Kohnen",
    description:
      "Looking for a trusted criminal defense attorney in San Diego, CA? Marc Kohnen, an experienced criminal defense lawyer in San Diego, fights to protect your rights.",
    themeColor: "#060c19",
    bodyBg: "#0a1428",
  });

  // Rotating verdict headline
  useEffect(() => {
    const id = setInterval(() => setVIdx((i) => (i + 1) % VERDICTS.length), 2400);
    return () => clearInterval(id);
  }, []);

  // Mouse-driven parallax on the newsprint layers
  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const mx = e.clientX / window.innerWidth - 0.5;
        const my = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--mx", mx.toFixed(3));
        el.style.setProperty("--my", my.toFixed(3));
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Scroll-velocity skew on the breaking-news crawls
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let current = 0,
      target = 0,
      last = window.scrollY,
      raf = 0;
    const onScroll = () => {
      const y = window.scrollY;
      const d = y - last;
      last = y;
      target = Math.max(-7, Math.min(7, d * 0.4));
    };
    const loop = () => {
      target *= 0.9;
      current += (target - current) * 0.2;
      el.style.setProperty("--vskew", `${current.toFixed(2)}deg`);
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <div className="d4" ref={root}>
      <BackToGallery />

      {/* fixed parallax newsprint backdrop */}
      <div className="paperbg" aria-hidden="true" />
      <img className="clip-float a" src="/assets/group-70.png" alt="" aria-hidden="true" />
      <img className="clip-float b" src="/assets/untitled33.png" alt="" aria-hidden="true" />

      <div className="shell">
        <header className="bar">
          <div className="wrap nav">
            <a className="brand" href="https://msklawyer.com/">
              <img src="/assets/logo.png" alt="Kohnen Law logo" />
              <b>KOHNEN<small>LAW</small></b>
            </a>
            <nav className={`menu${open ? " open" : ""}`} onClick={close}>
              <a href="https://msklawyer.com/">Home</a>
              <a href="https://msklawyer.com/areas-of-practice/">Practice Areas</a>
              <a href="https://msklawyer.com/meet-marc/">Meet Marc</a>
              <a href="https://msklawyer.com/result/">Results</a>
              <a href="https://msklawyer.com/blog/">Media</a>
              <a href="https://msklawyer.com/faq/">FAQ</a>
              <a href="https://msklawyer.com/contact-marc/">Contact</a>
            </nav>
            <a className="btn btn-gold desktop" href="tel:6193982500">Call Marc Now</a>
            <button className="burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </header>

        {/* masthead nameplate */}
        <div className="wrap">
          <div className="masthead">
            <div className="meta">
              <span>San Diego, California</span>
              <span>Vol. XIII · The People&rsquo;s Defense</span>
              <span>Free Consultation · 24/7</span>
            </div>
            <div className="nameplate">The Kohnen <em>Tribune</em></div>
            <div className="sub">San Diego Criminal Defense · Est. Putting Your Freedom First</div>
          </div>
        </div>

        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker"><span className="blink" /> Breaking · The headline every client wants</span>
            </div>
            <div className="headline reveal" aria-hidden="true">
              <span className="static">The verdict:</span>
              <span className="rotator">
                <span className={`word${vIdx % 2 === 1 ? " solid" : ""}`} key={vIdx}>
                  {VERDICTS[vIdx]}
                </span>
              </span>
            </div>
            <div className="lead reveal">
              <h1 className="real">
                Marc Kohnen — the leading <b>Criminal Defense Attorney</b> in San Diego, CA. Putting
                your freedom, liberty and peace of mind first.
              </h1>
              <p className="l">
                Everyone deserves the right to defend themselves. Marc puts 13+ years of experience
                into practice and prepares the best defense — saving you significant jail time and
                thousands of dollars you might spend otherwise.
              </p>
              <div className="hero-cta">
                <a className="btn btn-gold" href="tel:6193982500">Call (619) 398-2500</a>
                <a className="btn btn-ghost" href="https://msklawyer.com/contact-marc/">Free Case Review</a>
              </div>
              <p className="asseen">
                As seen on the <b>San Diego Union-Tribune</b> front page — a real acquittal.
              </p>
            </div>
          </div>
        </section>

        {/* KINETIC CRAWLS */}
        <div className="crawl">
          <div className="crawl-row solid"><CrawlTrack items={CRAWL_TOP} kind="top" /></div>
          <div className="crawl-row outline"><CrawlTrack items={CRAWL_BOTTOM} kind="bottom" /></div>
        </div>

        {/* BY THE NUMBERS */}
        <section className="block">
          <div className="wrap">
            <div className="sec-label">By the numbers</div>
            <div className="numbers">
              <div className="n reveal"><b>13+</b><span>Years Defending</span></div>
              <div className="n reveal"><b>5.0★</b><span>Yelp &amp; Google</span></div>
              <div className="n reveal"><b>1000s</b><span>Cases Handled</span></div>
              <div className="n reveal"><b>24/7</b><span>Available to You</span></div>
            </div>
          </div>
        </section>

        {/* FRONT-PAGE FEATURE */}
        <section className="block feature">
          <div className="wrap fgrid">
            <div className="reveal">
              <div className="sec-label">The exhibit</div>
              <h2>Ask any other attorney if they&rsquo;ve ever put a <span className="hi">NOT&nbsp;GUILTY</span> verdict on the front page.</h2>
              <p className="pullquote">Most lawyers promise the world. Marc has the headlines to prove it.</p>
              <p>Including a San Diego Union-Tribune front-page acquittal. When your freedom is on the line, experience and results are everything — and Marc helps you avoid a permanent record while keeping your reputation intact.</p>
              <a className="btn btn-gold" href="https://msklawyer.com/result/" style={{ marginTop: 14 }}>See the Results</a>
            </div>
            <div className="clip reveal">
              <span className="tape">Front Page</span>
              <img src="/assets/group-70.png" alt="San Diego Union-Tribune front page: Acquittal in chokehold case won by Marc Kohnen" />
            </div>
          </div>
        </section>

        {/* SECTIONS INDEX (practice areas) */}
        <section className="block index">
          <div className="wrap">
            <div className="sec-label">Inside this edition</div>
            <div className="sec-title">What we defend.</div>
            <div className="list" style={{ marginTop: 40 }}>
              {[
                ["Section A", "DUI & DWI", "pg. A1", "https://msklawyer.com/san-diego-dui-attorney/"],
                ["Section B", "Drug Crimes", "pg. B2", "https://msklawyer.com/san-diego-criminal-defense-lawyer/drug-crime-attorney/"],
                ["Section C", "White Collar", "pg. C1", "https://msklawyer.com/white-collar/"],
                ["Section D", "Assault & Violent Crimes", "pg. D3", "https://msklawyer.com/assault/"],
                ["Section E", "Homicide", "pg. E1", "https://msklawyer.com/homicide/"],
                ["Section F", "Sex Crimes", "pg. F2", "https://msklawyer.com/sex-crimes/"],
                ["Section G", "Juvenile Crimes", "pg. G1", "https://msklawyer.com/juvenile-crimes/"],
                ["Section H", "And more →", "All areas", "https://msklawyer.com/areas-of-practice/"],
              ].map(([sec, title, pg, href]) => (
                <a className="irow reveal" href={href} key={sec}>
                  <div className="sec">{sec}</div>
                  <h3>{title}</h3>
                  <div className="leader" />
                  <div className="pg">{pg}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* LETTERS / TESTIMONY */}
        <section className="block letters">
          <div className="wrap">
            <div className="sec-label">Letters to the editor</div>
            <div className="sec-title">In their words.</div>
            <div className="lgrid" style={{ marginTop: 40 }}>
              <div className="letter reveal"><div className="stars">★★★★★</div><p>&ldquo;Amazing lawyer! He saved my case after another incompetent lawyer almost ruined it. He is very diligent, has great attention to detail! Thank you Marc!&rdquo;</p><div className="who">Aston O.<small>Yelp Review</small></div></div>
              <div className="letter reveal"><div className="stars">★★★★★</div><p>&ldquo;The prosecutor was trying to pin 21 counts and 10 years on my brother. Marc got it down to 3 counts and 3 years. Thank you thank you thank you for the wonderful work.&rdquo;</p><div className="who">Teena E.<small>Verified Review</small></div></div>
              <div className="letter reveal"><div className="stars">★★★★★</div><p>&ldquo;Please don&rsquo;t go anywhere else, call Marc Kohnen. He gets right back to you and is so efficient! As of now — my son is sober, completed his education, and is flourishing.&rdquo;</p><div className="who">Patti M.<small>Google Review</small></div></div>
            </div>
          </div>
        </section>

        {/* BYLINE / MEET MARC */}
        <section className="block byline">
          <div className="wrap fgrid">
            <div className="ph reveal">
              <img src="/assets/untitled33.png" alt="Marc S. Kohnen working at his San Diego criminal defense law office" />
              <div className="cap">Marc S. Kohnen · The Law Office of Marc S. Kohnen</div>
            </div>
            <div className="reveal">
              <div className="sec-label">The byline</div>
              <h2>A relentless advocate who actually reads your file.</h2>
              <p>As a highly-acclaimed criminal defense attorney in San Diego, Marc has defended highly complex criminal cases over the years — even representing Hollywood celebrities. He believes everyone deserves the right to defend themselves.</p>
              <p>Carrying glowing recommendations and 5-star Yelp reviews, Marc understands the emotionally rattling experience you&rsquo;re going through, and is here to deliver the high-quality results that earned his reputation.</p>
              <a className="btn btn-gold" href="https://msklawyer.com/meet-marc/" style={{ marginTop: 8 }}>Meet Marc Kohnen</a>
            </div>
          </div>
        </section>

        {/* BADGES */}
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

        {/* BIG CTA */}
        <section className="block bigcta">
          <div className="wrap">
            <div className="big reveal">Don&rsquo;t wait. <em>Make headlines.</em></div>
            <p className="reveal">The sooner Marc is on your side, the more he can do. Get a free, confidential consultation today and let Marc become your voice in the court.</p>
            <div className="hero-cta reveal" style={{ justifyContent: "center" }}>
              <a className="btn btn-gold" href="tel:6193982500">Call (619) 398-2500</a>
              <a className="btn btn-ghost" href="https://msklawyer.com/contact-marc/">Contact Marc</a>
            </div>
          </div>
        </section>

        {/* COLOPHON */}
        <footer className="colophon">
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
          </div>
        </footer>
      </div>
    </div>
  );
}
