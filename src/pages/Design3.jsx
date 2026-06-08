import { useRef, useState, useEffect } from "react";
import { usePageMeta } from "../hooks/usePageMeta.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "../styles/design3.css";

const MARQUEE = [
  "DUI Defense", "Drug Crimes", "Homicide", "Sex Crimes", "White Collar",
  "Domestic Violence", "Federal Defense", "Assault", "Theft", "Weapons",
];

export default function Design3() {
  const root = useRef(null);
  const bgRef = useRef(null);
  const [open, setOpen] = useState(false);
  useScrollReveal(root, { groups: 4, stagger: 80 });
  usePageMeta({
    title: "Criminal Defense Attorney In San Diego, CA - Marc S. Kohnen",
    description:
      "Looking for a trusted criminal defense attorney in San Diego, CA? Marc Kohnen, an experienced criminal defense lawyer in San Diego, fights to protect your rights.",
    themeColor: "#0a1428",
    bodyBg: "#0a1428",
  });

  // Subtle parallax on the newspaper backdrop
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 900 && bgRef.current) {
        bgRef.current.style.transform = `translateY(calc(-50% + ${y * 0.08}px))`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const ticker = (
    <>
      {MARQUEE.map((m, i) => (
        <span key={i}>
          <span>{m}</span>
          <span className="dot">&bull;</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="d3" ref={root}>
      <div className="callbar">
        Arrested in San Diego? Call now — <a href="tel:6193982500">(619) 398-2500</a> · Free,
        confidential consultation, 24/7
      </div>

      <header className="site">
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

      <section className="hero">
        <div className="bg">
          <img ref={bgRef} src="/assets/group-70.png" alt="" aria-hidden="true" />
        </div>
        <div className="wrap hgrid">
          <div className="reveal">
            <div className="verdict">
              <span className="stamp">VERDICT</span>
              <span className="t">San Diego · 13+ Years Defending the Accused</span>
            </div>
            <div className="mega">NOT<br /><span className="out">GUILTY.</span></div>
            <h1 className="real">
              Marc Kohnen — the leading <b>Criminal Defense Attorney</b> in San Diego, CA. Putting
              your freedom, liberty and peace of mind first.
            </h1>
            <p className="l">
              Everyone deserves the right to defend themselves. When it&rsquo;s about protecting your
              rights, Marc puts his experience into practice and prepares the best defense — saving
              you significant jail time and thousands of dollars you might spend otherwise.
            </p>
            <div className="hero-cta">
              <a className="btn btn-gold" href="tel:6193982500">Call (619) 398-2500</a>
              <a className="btn btn-ghost" href="https://msklawyer.com/contact-marc/">Free Case Review</a>
            </div>
          </div>
          <div className="portrait reveal">
            <img
              src="/assets/marc-portrait.jpg"
              alt="San Diego criminal defense attorney Marc S. Kohnen reviewing a case with a client"
            />
            <span className="name">MARC S. KOHNEN</span>
          </div>
        </div>
        <div className="scrollcue">Scroll</div>
      </section>

      <div className="marquee">
        <div className="track">
          {ticker}
          {ticker}
        </div>
      </div>

      <section className="intro">
        <div className="wrap">
          <span className="kicker">Let Marc Become Your Voice in the Court</span>
          <p className="reveal" style={{ marginTop: 22 }}>
            For the past 13 years, Marc Kohnen has strived to become <em>the voice of the accused</em>{" "}
            — defending highly complex criminal cases, even representing Hollywood celebrities, on the
            principle that you are <em>innocent until proven guilty.</em>
          </p>
          <div className="stats">
            <div className="s reveal"><b>13<span className="r">+</span></b><span>Years Defending</span></div>
            <div className="s reveal"><b>5.0<span className="r">&#9733;</span></b><span>Yelp &amp; Google Reviews</span></div>
            <div className="s reveal"><b>1000<span className="r">s</span></b><span>Cases Handled</span></div>
            <div className="s reveal"><b>24<span className="r">/7</span></b><span>Available to You</span></div>
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="wrap fgrid">
          <div className="reveal">
            <span className="kicker">Providing Legal Insight Like Never Before</span>
            <h2>Ask any other attorney if they&rsquo;ve ever put a <span className="hi">NOT&nbsp;GUILTY</span> verdict on the front page.</h2>
            <p>Most lawyers will promise you the world. Marc has the headlines to prove it — including a San Diego Union-Tribune front-page acquittal. When your freedom is on the line, experience and results are everything.</p>
            <p>With Marc by your side, you avoid a permanent criminal record and keep your reputation intact.</p>
            <a className="btn btn-gold" href="https://msklawyer.com/result/" style={{ marginTop: 14 }}>See the Results</a>
          </div>
          <div className="clip reveal">
            <span className="tape">FRONT PAGE</span>
            <img src="/assets/group-70.png" alt="San Diego Union-Tribune front page: Acquittal in chokehold case won by Marc Kohnen" />
          </div>
        </div>
      </section>

      <section className="areas">
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker">Comprehensive Criminal Defense Services</span>
            <div className="mega">What we<br />defend.</div>
          </div>
          <div className="list">
            <a className="arow reveal" href="https://msklawyer.com/san-diego-dui-attorney/"><div className="no">01</div><div><h3>DUI &amp; DWI</h3><p>From challenging field sobriety tests to negotiating with prosecutors, we work to minimize the impact on your life.</p></div><div className="go">Defend this &rarr;</div></a>
            <a className="arow reveal" href="https://msklawyer.com/san-diego-criminal-defense-lawyer/drug-crime-attorney/"><div className="no">02</div><div><h3>Drug Crimes</h3></div><div className="go">Defend this &rarr;</div></a>
            <a className="arow reveal" href="https://msklawyer.com/white-collar/"><div className="no">03</div><div><h3>White Collar</h3></div><div className="go">Defend this &rarr;</div></a>
            <a className="arow reveal" href="https://msklawyer.com/assault/"><div className="no">04</div><div><h3>Assault &amp; Violent Crimes</h3></div><div className="go">Defend this &rarr;</div></a>
            <a className="arow reveal" href="https://msklawyer.com/homicide/"><div className="no">05</div><div><h3>Homicide</h3></div><div className="go">Defend this &rarr;</div></a>
            <a className="arow reveal" href="https://msklawyer.com/sex-crimes/"><div className="no">06</div><div><h3>Sex Crimes</h3></div><div className="go">Defend this &rarr;</div></a>
            <a className="arow reveal" href="https://msklawyer.com/juvenile-crimes/"><div className="no">07</div><div><h3>Juvenile Crimes</h3></div><div className="go">Defend this &rarr;</div></a>
            <a className="arow reveal" href="https://msklawyer.com/areas-of-practice/"><div className="no">08</div><div><h3>And more &rarr;</h3></div><div className="go">All areas &rarr;</div></a>
          </div>
        </div>
      </section>

      <section className="why">
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker">Why Choose Us as Your San Diego Criminal Defense Attorney?</span>
            <div className="mega" style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}>Expert defense.<br />Proven results.</div>
          </div>
          <div className="wgrid">
            <div className="wc reveal"><div className="n">01</div><h3>Proven Track Record</h3><p>Years in San Diego&rsquo;s courtrooms securing favorable verdicts and settlements for clients.</p></div>
            <div className="wc reveal"><div className="n">02</div><h3>Strategic Mindset</h3><p>Each case approached with a detailed strategy — every angle of your defense meticulously planned.</p></div>
            <div className="wc reveal"><div className="n">03</div><h3>Clear Communication</h3><p>Transparency and unwavering dedication to your defense at every step of the process.</p></div>
            <div className="wc reveal"><div className="n">04</div><h3>Personalized</h3><p>First-time offense or serious felony — every case is unique, and we treat it as such.</p></div>
          </div>
        </div>
      </section>

      <section className="meet">
        <div className="wrap fgrid">
          <div className="ph reveal"><img src="/assets/untitled33.png" alt="Marc S. Kohnen working at his San Diego criminal defense law office" /></div>
          <div className="reveal">
            <span className="kicker">Meet Marc</span>
            <h2>A relentless advocate who actually reads your file.</h2>
            <p>As a highly-acclaimed criminal defense attorney in San Diego, Marc has defended highly complex criminal cases over the years. He believes everyone deserves the right to defend themselves — and that the right defense can save you significant jail time and thousands of dollars.</p>
            <p>Carrying glowing recommendations and 5-star Yelp reviews, Marc understands the emotionally rattling experience you&rsquo;re going through, and is here to deliver the high-quality results that earned his reputation.</p>
            <a className="btn btn-bone" href="https://msklawyer.com/meet-marc/">Meet Marc Kohnen</a>
          </div>
        </div>
      </section>

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

      <section className="reviews">
        <div className="wrap">
          <div className="sec-head center">
            <span className="kicker">What Clients Say About Marc</span>
            <div className="mega" style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}>In their words.</div>
          </div>
          <div className="rgrid">
            <div className="rev reveal"><div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>&ldquo;Amazing lawyer! He saved my case after another incompetent lawyer almost ruined it. He is very diligent, has great attention to detail! Thank you Marc!&rdquo;</p><div className="who">Aston O.<small>Yelp Review</small></div></div>
            <div className="rev reveal"><div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>&ldquo;The prosecutor was trying to pin 21 counts and 10 years on my brother. Marc was able to get it down to 3 counts and 3 years. Thank you thank you thank you for the wonderful work you were able to do.&rdquo;</p><div className="who">Teena E.<small>Verified Review</small></div></div>
            <div className="rev reveal"><div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>&ldquo;Please don&rsquo;t go anywhere else, call Marc Kohnen. He gets right back to you and is so efficient! As of now — my son is sober, completed his education, and is flourishing at his job.&rdquo;</p><div className="who">Patti M.<small>Google Review</small></div></div>
          </div>
        </div>
      </section>

      <section className="serving">
        <div className="wrap">
          <span className="kicker">Serving All of San Diego County</span>
          <div className="mega" style={{ marginTop: 14 }}>Trusted across San Diego.</div>
          <p>Located in the heart of San Diego, Marc Kohnen proudly serves clients across the county — providing compassionate yet assertive legal representation at every step.</p>
          <div className="counties"><span>Downtown San Diego</span><span>Chula Vista</span><span>El Cajon</span><span>Vista</span><span>Carlsbad</span><span>Oceanside</span><span>La Mesa</span><span>Escondido</span><span>National City</span></div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker">Read the Latest News</span>
            <div className="mega" style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}>Media &amp; articles.</div>
          </div>
          <div className="bgrid">
            <a className="post reveal" href="https://msklawyer.com/blog/"><div className="ph"><span>DUI Defense</span></div><div className="pad"><h3>Affordable DUI Attorneys in San Diego, CA</h3><p>DUIs can be as simple as being a bit over the limit when stopped for a minor traffic violation, or as complex as allegedly causing a major car accident resulting in severe injuries to multiple parties.</p></div></a>
            <a className="post reveal" href="https://msklawyer.com/blog/"><div className="ph"><span>Domestic Violence</span></div><div className="pad"><h3>Can I Get Arrested for Domestic Violence During Coronavirus</h3><p>If you&rsquo;re taking the time to read our newest law firm article, then chances are high either you, or someone you love, is facing a criminal charge.</p></div></a>
          </div>
        </div>
      </section>

      <section className="bigcta">
        <div className="wrap">
          <div className="mega reveal">Don&rsquo;t wait.</div>
          <p className="reveal">The sooner Marc is on your side, the more he can do. Get a free, confidential consultation today and let Marc become your voice in the court.</p>
          <div className="hero-cta reveal" style={{ justifyContent: "center" }}>
            <a className="btn btn-bone" href="tel:6193982500">Call (619) 398-2500</a>
            <a className="btn btn-ghost" href="https://msklawyer.com/contact-marc/">Contact Marc</a>
          </div>
        </div>
      </section>

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
            The Law Office of Marc S. Kohnen. All Rights Reserved 2025. This website is for marketing
            and advertising purposes, per California Marketing Laws, this site shall not be deemed or
            considered legal advice. None of the information on this website, nor the access of this
            website shall create an attorney client relationship. If you have questions about a case,
            please contact our law office directly.
          </p>
        </div>
      </footer>
    </div>
  );
}
