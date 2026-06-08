import { useRef, useState } from "react";
import { usePageMeta } from "../hooks/usePageMeta.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import BackToGallery from "../components/BackToGallery.jsx";
import "../styles/design1.css";

export default function Design1() {
  const root = useRef(null);
  const [open, setOpen] = useState(false);
  useScrollReveal(root, { groups: 3, stagger: 90 });
  usePageMeta({
    title: "Criminal Defense Attorney In San Diego, CA - Marc S. Kohnen",
    description:
      "Looking for a trusted criminal defense attorney in San Diego, CA? Marc Kohnen, an experienced criminal defense lawyer in San Diego, fights to protect your rights.",
    themeColor: "#16173c",
    bodyBg: "#f7f4ed",
  });
  const close = () => setOpen(false);

  return (
    <div className="d1" ref={root}>
      <BackToGallery />

      <div className="topbar">
        <div className="wrap">
          <span className="hideSm">The Law Office of Marc S. Kohnen · San Diego, CA</span>
          <span>
            <a href="tel:6193982500">&#9742; (619) 398-2500</a>{" "}
            <span className="sep">|</span> <a href="mailto:marc@msklawyer.com">marc@msklawyer.com</a>
          </span>
        </div>
      </div>

      <header className="site">
        <div className="wrap nav">
          <a className="brand" href="https://msklawyer.com/">
            <span className="mark">
              KOH<br />NEN<small>LAW</small>
            </span>
          </a>
          <nav className={`menu${open ? " open" : ""}`} onClick={close}>
            <a href="https://msklawyer.com/">Home</a>
            <a href="https://msklawyer.com/areas-of-practice/">Practice Areas</a>
            <a href="https://msklawyer.com/meet-marc/">Meet Marc</a>
            <a href="https://msklawyer.com/result/">Results</a>
            <a href="https://msklawyer.com/blog/">Media &amp; Articles</a>
            <a href="https://msklawyer.com/faq/">FAQ</a>
            <a href="https://msklawyer.com/contact-marc/">Contact</a>
            <a className="btn btn-call" href="tel:6193982500">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.3 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
              </svg>
              Call Marc Now
            </a>
          </nav>
          <a className="btn btn-cta desktop" href="https://msklawyer.com/contact-marc/">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="3" y="4.5" width="18" height="16" rx="2" />
              <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
            </svg>
            Schedule Consultation
          </a>
          <button className="burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="wrap grid">
          <div className="reveal">
            <span className="eyebrow">San Diego Criminal Defense · 13+ Years</span>
            <h1>
              Marc Kohnen — The leading <span className="em">Criminal Defense Attorney</span> in San
              Diego, CA
            </h1>
            <p className="lede">
              Putting your freedom, liberty and peace of mind first. Everyone deserves the right to
              defend themselves — when it&rsquo;s about protecting your rights, Marc puts his
              experience into practice and prepares the best defense.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:6193982500">Call (619) 398-2500</a>
              <a className="btn btn-ghost" href="https://msklawyer.com/contact-marc/">
                Request a Free Case Review
              </a>
            </div>
            <div className="trust-row">
              <div className="stat"><b>13+</b><span>Years Defending</span></div>
              <div className="divider"></div>
              <div className="stat"><b>5.0</b><span>Yelp &amp; Google</span></div>
              <div className="divider"></div>
              <div className="stat">
                <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span>Verified Reviews</span>
              </div>
            </div>
          </div>
          <div className="portrait reveal">
            <img
              src="/assets/marc-portrait.jpg"
              alt="Criminal defense attorney Marc S. Kohnen reviewing a case with a client in San Diego"
            />
            <div className="frame"></div>
            <div className="tag">
              <b>Marc S. Kohnen</b>
              <small>Criminal Defense Attorney</small>
            </div>
          </div>
        </div>
      </section>

      <div className="badges">
        <div className="wrap">
          <img src="/assets/badge-71.png" alt="Super Lawyers" />
          <img src="/assets/badge-72.png" alt="AVVO Excellent Top Attorney" />
          <img src="/assets/badge-70.png" alt="National Association of Criminal Defense Lawyers" />
          <img src="/assets/badge-73.png" alt="National College for DUI Defense" />
          <img src="/assets/badge-74.png" alt="People Love Us on Yelp" />
          <img src="/assets/badge-69.png" alt="Review us on Google" />
        </div>
      </div>

      <section>
        <div className="wrap split">
          <div className="body reveal">
            <span className="eyebrow">Let Marc Become Your Voice in the Court</span>
            <h2>Let Marc become your voice in the court</h2>
            <p>
              For the past 13 years, Marc Kohnen has strived to become the voice of the accused. As
              a seasoned criminal defense attorney in San Diego, CA, Marc believes in the
              philosophy, &ldquo;innocent until proven guilty.&rdquo; So, when you reach out to
              Marc, you can rest assured that you&rsquo;re in capable hands with your rights
              protected in every possible way.
            </p>
            <p>
              Whether you&rsquo;ve been accused of a federal offense or facing theft charges, hiring
              the best criminal defense lawyer in San Diego can relieve you of your stresses
              instantly. Legal issues require expert legal advice. With Marc by your side, avoid a
              permanent criminal record and keep your reputation intact.
            </p>
            <a className="btn btn-primary" href="https://msklawyer.com/meet-marc/" style={{ marginTop: 8 }}>
              Meet Marc
            </a>
          </div>
          <div className="imgcard reveal">
            <img
              src="/assets/untitled33.png"
              alt="Marc S. Kohnen working on a criminal defense case at his San Diego office"
            />
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">Providing Legal Insight Like Never Before</span>
            <h2>Ask any other attorney if they&rsquo;ve ever put a NOT&nbsp;GUILTY verdict on the front page.</h2>
            <p>
              Marc has defended highly complex criminal cases over the years, even representing
              Hollywood celebrities. When it&rsquo;s about protecting your rights, Marc puts his
              experience into practice and prepares the best defense — saving you significant jail
              time and thousands of dollars you might spend otherwise.
            </p>
            <a className="btn btn-gold" href="https://msklawyer.com/result/" style={{ marginTop: 26 }}>
              See the Results
            </a>
          </div>
          <div className="reveal">
            <img
              className="clip"
              src="/assets/group-70.png"
              alt="San Diego Union-Tribune front page: Acquittal in chokehold case won by Marc Kohnen"
            />
          </div>
        </div>
      </section>

      <section className="areas">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Comprehensive Criminal Defense Services</span>
            <h2>A practice built to defend every charge</h2>
          </div>
          <div className="grid3">
            <a className="area reveal" href="https://msklawyer.com/san-diego-dui-attorney/">
              <div className="num">01</div>
              <h3>DUI &amp; DWI Defense</h3>
              <p>We understand the complexities of DUI charges in California. From challenging field sobriety tests to negotiating with prosecutors, we work to minimize the impact on your life.</p>
              <span className="more">Learn more <span>&rarr;</span></span>
            </a>
            <a className="area reveal" href="https://msklawyer.com/san-diego-criminal-defense-lawyer/drug-crime-attorney/">
              <div className="num">02</div>
              <h3>Drug Crimes</h3>
              <p>Whether you&rsquo;re facing possession, trafficking, or distribution charges, our firm has successfully defended numerous clients against serious drug-related allegations.</p>
              <span className="more">Learn more <span>&rarr;</span></span>
            </a>
            <a className="area reveal" href="https://msklawyer.com/white-collar/">
              <div className="num">03</div>
              <h3>White Collar Crimes</h3>
              <p>With expertise in cases involving fraud, embezzlement, and other financial crimes, our team provides the thorough defense necessary for complex cases.</p>
              <span className="more">Learn more <span>&rarr;</span></span>
            </a>
            <a className="area reveal" href="https://msklawyer.com/assault/">
              <div className="num">04</div>
              <h3>Assault &amp; Violent Crimes</h3>
              <p>From assault and battery to domestic violence, our firm takes a proactive approach to ensure your side of the story is heard.</p>
              <span className="more">Learn more <span>&rarr;</span></span>
            </a>
            <a className="area reveal" href="https://msklawyer.com/juvenile-crimes/">
              <div className="num">05</div>
              <h3>Juvenile Crimes</h3>
              <p>Protecting the futures of young clients is a priority. We handle juvenile cases with the care and dedication they deserve, working to minimize long-term repercussions.</p>
              <span className="more">Learn more <span>&rarr;</span></span>
            </a>
            <a className="area reveal" href="https://msklawyer.com/areas-of-practice/">
              <div className="num">06</div>
              <h3>And more — Homicide, Sex Crimes, Theft &amp; Federal</h3>
              <p>Marc handles the full spectrum of state and federal charges across San Diego County. View every practice area we defend.</p>
              <span className="more">All practice areas <span>&rarr;</span></span>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Why Choose Us as Your San Diego Criminal Defense Attorney?</span>
            <h2>Expert legal defense with proven results</h2>
          </div>
          <div className="why">
            <div className="item reveal"><h3>Proven Track Record</h3><p>With years of experience in San Diego&rsquo;s courtrooms, Marc has a track record of securing favorable verdicts and settlements for our clients.</p></div>
            <div className="item reveal"><h3>Strategic Defense</h3><p>We approach each case with a detailed and strategic mindset, ensuring every angle of your defense is meticulously planned.</p></div>
            <div className="item reveal"><h3>Clear Communication</h3><p>We believe in clear communication, transparency, and unwavering dedication to your defense at each step of the process.</p></div>
            <div className="item reveal"><h3>Personalized Guidance</h3><p>Every case is unique, and we treat it as such — whether a first-time offense or a serious felony charge, we stand by your side.</p></div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="wrap">
          <div className="sec-head center">
            <span className="eyebrow">What Clients Say About Marc</span>
            <h2>Trusted by the people he&rsquo;s defended</h2>
          </div>
          <div className="rgrid">
            <div className="review reveal"><div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>&ldquo;Please don&rsquo;t go anywhere else, call Marc Kohnen. He gets right back to you and is so efficient! I was a nervous wreck when my son got his SECOND DUI. He was professional and very reassuring. As of now — my son is sober, completed his education, and is flourishing at his job.&rdquo;</p><div className="who">Patti M.<small>Google Review</small></div></div>
            <div className="review reveal"><div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>&ldquo;Marc was the defense attorney for my brother. The prosecutor was trying to pin 21 counts and 10 years on my brother. Marc was able to get it down to 3 counts and 3 years … most of the time in &lsquo;fire camp&rsquo; for non-violent offenders. Thank you thank you thank you!&rdquo;</p><div className="who">Teena E.<small>Verified Review</small></div></div>
            <div className="review reveal"><div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>&ldquo;Amazing lawyer! He saved my case after another incompetent lawyer almost ruined it. He is very diligent, has great attention to detail! Thank you Marc!&rdquo;</p><div className="who">Aston O.<small>Yelp Review</small></div></div>
          </div>
        </div>
      </section>

      <section className="serving">
        <div className="wrap">
          <span className="eyebrow">Serving All of San Diego County</span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", marginTop: 14 }}>
            Trusted representation across San Diego
          </h2>
          <p>
            Located in the heart of San Diego, Marc Kohnen proudly serves clients across the county.
            We understand the stress of facing criminal charges and are here to support you at every
            step, providing compassionate yet assertive legal representation.
          </p>
          <div className="counties">
            <span>Downtown San Diego</span><span>Chula Vista</span><span>El Cajon</span><span>Vista</span><span>Carlsbad</span><span>Oceanside</span><span>La Mesa</span><span>Escondido</span><span>National City</span>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Read the Latest News</span>
            <h2>Media &amp; articles</h2>
          </div>
          <div className="bgrid">
            <a className="post reveal" href="https://msklawyer.com/blog/">
              <div className="ph"><span className="cat">DUI Defense</span></div>
              <div className="pad"><h3>Affordable DUI Attorneys in San Diego, CA</h3><p>DUIs can be as simple as being a bit over the limit when stopped for a minor traffic violation — or as complex as allegedly causing a major accident resulting in severe injuries to multiple parties.</p></div>
            </a>
            <a className="post reveal" href="https://msklawyer.com/blog/">
              <div className="ph"><span className="cat">Domestic Violence</span></div>
              <div className="pad"><h3>Can I Get Arrested for Domestic Violence During Coronavirus?</h3><p>If you&rsquo;re taking the time to read our newest law firm article, chances are high either you, or someone you love, is facing a criminal charge.</p></div>
            </a>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Let Marc become your voice in the court</h2>
          <p>
            Carrying glowing recommendations and 5-star Yelp reviews, Marc understands the
            emotionally rattling experience you&rsquo;re going through — and is here to deliver the
            same high-quality results that earned his reputation as San Diego&rsquo;s best criminal
            defense attorney.
          </p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary" href="tel:6193982500">Call (619) 398-2500</a>
            <a className="btn btn-ghost" href="https://msklawyer.com/contact-marc/">Contact Marc</a>
          </div>
        </div>
      </section>

      <footer className="site">
        <div className="wrap">
          <div className="fgrid">
            <div>
              <img className="flogo" src="/assets/footer-logo.png" alt="Kohnen Law" />
              <p style={{ maxWidth: 300 }}>
                The Law Office of Marc S. Kohnen — aggressive, compassionate criminal defense for all
                of San Diego County.
              </p>
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
