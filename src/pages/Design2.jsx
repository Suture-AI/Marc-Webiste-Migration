import { useRef, useState } from "react";
import { usePageMeta } from "../hooks/usePageMeta.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import BackToGallery from "../components/BackToGallery.jsx";
import "../styles/design2.css";

export default function Design2() {
  const root = useRef(null);
  const [open, setOpen] = useState(false);
  useScrollReveal(root, { groups: 3, stagger: 90 });
  usePageMeta({
    title: "Criminal Defense Attorney In San Diego, CA - Marc S. Kohnen",
    description:
      "Looking for a trusted criminal defense attorney in San Diego, CA? Marc Kohnen, an experienced criminal defense lawyer in San Diego, fights to protect your rights.",
    themeColor: "#0f1d3a",
    bodyBg: "#0a1428",
  });
  const close = () => setOpen(false);

  return (
    <div className="d2" ref={root}>
      <BackToGallery />

      <div className="util">
        <div className="wrap">
          <span className="left">Innocent until proven guilty — serving all of San Diego County</span>
          <span className="social">
            <a href="tel:6193982500">&#9742; (619) 398-2500</a>
            <a href="mailto:marc@msklawyer.com">marc@msklawyer.com</a>
          </span>
        </div>
      </div>

      <header className="site">
        <div className="wrap nav">
          <a className="brand" href="https://msklawyer.com/">
            <img src="/assets/logo.png" alt="Kohnen Law logo" />
            <span className="txt">KOHNEN<small>LAW</small></span>
          </a>
          <nav className={`menu${open ? " open" : ""}`} onClick={close}>
            <a href="https://msklawyer.com/">Home</a>
            <a href="https://msklawyer.com/areas-of-practice/">Practice Areas</a>
            <a href="https://msklawyer.com/meet-marc/">Meet Marc</a>
            <a href="https://msklawyer.com/result/">Results</a>
            <a href="https://msklawyer.com/blog/">Media &amp; Articles</a>
            <a href="https://msklawyer.com/faq/">FAQ</a>
            <a href="https://msklawyer.com/contact-marc/">Contact Us</a>
          </nav>
          <a className="btn btn-gold desktop" href="tel:6193982500">Call Marc Now!</a>
          <button className="burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="wrap grid">
          <div className="reveal">
            <span className="eyebrow line">Putting Your Freedom, Liberty &amp; Peace of Mind First</span>
            <h1>Marc Kohnen — The leading <span className="g">Criminal Defense Attorney</span> in San Diego, CA</h1>
            <p className="sub">Let Marc become your voice in the court.</p>
            <p className="l">
              Everyone deserves the right to defend themselves. As a highly-acclaimed criminal
              defense attorney in San Diego, Marc puts his experience into practice and prepares the
              best defense — saving you significant jail time and thousands of dollars you might
              spend otherwise.
            </p>
            <div className="hero-cta">
              <a className="btn btn-gold" href="tel:6193982500">Call (619) 398-2500</a>
              <a className="btn btn-white" href="https://msklawyer.com/contact-marc/">Schedule Consultation</a>
            </div>
            <div className="stats">
              <div className="s"><b>13+</b><span>Years Experience</span></div>
              <div className="s"><b>5.0&#9733;</b><span>Yelp &amp; Google</span></div>
              <div className="s"><b>1000s</b><span>Cases Defended</span></div>
            </div>
          </div>
          <div className="photo reveal">
            <img src="/assets/marc-portrait.jpg" alt="San Diego criminal defense attorney Marc S. Kohnen consulting with a client" />
            <div className="badge-fp">NOT GUILTY — on the front page.</div>
          </div>
        </div>
      </section>

      <div className="trust">
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
          <div className="imgw reveal">
            <img src="/assets/untitled33.png" alt="Marc Kohnen at his San Diego law office" />
          </div>
          <div className="reveal">
            <span className="eyebrow">Let Marc Become Your Voice in the Court</span>
            <h2>A seasoned advocate who believes in &ldquo;innocent until proven guilty&rdquo;</h2>
            <p>
              For the past 13 years, Marc Kohnen has strived to become the voice of the accused. So,
              when you reach out to Marc, you can rest assured that you&rsquo;re in capable hands
              with your rights protected in every possible way.
            </p>
            <p>
              Whether you&rsquo;ve been accused of a federal offense or facing theft charges, hiring
              the best criminal defense lawyer in San Diego can relieve you of your stresses
              instantly. Legal issues require expert legal advice — with Marc by your side, avoid a
              permanent criminal record and keep your reputation intact.
            </p>
            <a className="btn btn-navy" href="https://msklawyer.com/meet-marc/">Meet Marc</a>
          </div>
        </div>
      </section>

      <section className="fp">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow line">Providing Legal Insight Like Never Before</span>
            <h2>Ask any other attorney before you hire them if they&rsquo;ve ever put a NOT GUILTY verdict on the front page.</h2>
            <p>
              Marc has defended highly complex criminal cases over the years, even representing
              Hollywood celebrities. Carrying glowing recommendations and 5-star Yelp reviews, Marc
              delivers the same high-quality results that have earned him the reputation of San
              Diego&rsquo;s best criminal defense attorney.
            </p>
            <a className="btn btn-out" href="https://msklawyer.com/result/" style={{ marginTop: 24 }}>View Results</a>
          </div>
          <div className="reveal">
            <img className="clip" src="/assets/group-70.png" alt="San Diego Union-Tribune front page acquittal in chokehold case won by Marc Kohnen" />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Trusted Representation by San Diego&rsquo;s Top Criminal Defense Attorneys</span>
            <h2>Why choose us as your San Diego criminal defense attorney?</h2>
            <p>At Marc Kohnen, we believe in clear communication, transparency, and unwavering dedication to your defense. Every case is unique, and we treat it as such.</p>
          </div>
          <div className="why">
            <div className="wcard reveal"><div className="ic">&#9878;</div><h3>Expert Legal Defense</h3><p>With years of experience in San Diego&rsquo;s courtrooms, Marc has a track record of securing favorable verdicts and settlements for our clients.</p></div>
            <div className="wcard reveal"><div className="ic">&#9873;</div><h3>Proven Results</h3><p>We approach each case with a detailed and strategic mindset, ensuring every angle of your defense is meticulously planned.</p></div>
            <div className="wcard reveal"><div className="ic">&#9993;</div><h3>By Your Side</h3><p>Whether you&rsquo;re dealing with a first-time offense or a serious felony charge, our team is here to stand by your side at every step.</p></div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Expert Legal Defense with Proven Results</span>
            <h2>Comprehensive criminal defense services</h2>
          </div>
          <div className="sgrid">
            <a className="srv reveal" href="https://msklawyer.com/san-diego-dui-attorney/"><div className="n">01</div><div><h3>DUI &amp; DWI Defense</h3><p>We understand the complexities of DUI charges in California. From challenging field sobriety tests to negotiating with prosecutors, we work to minimize the impact on your life.</p></div></a>
            <a className="srv reveal" href="https://msklawyer.com/san-diego-criminal-defense-lawyer/drug-crime-attorney/"><div className="n">02</div><div><h3>Drug Crimes</h3><p>Whether you&rsquo;re facing possession, trafficking, or distribution charges, our firm has successfully defended numerous clients against serious drug-related allegations.</p></div></a>
            <a className="srv reveal" href="https://msklawyer.com/white-collar/"><div className="n">03</div><div><h3>White Collar Crimes</h3><p>With expertise in cases involving fraud, embezzlement, and other financial crimes, our team provides the thorough defense necessary for complex cases.</p></div></a>
            <a className="srv reveal" href="https://msklawyer.com/assault/"><div className="n">04</div><div><h3>Assault &amp; Violent Crimes</h3><p>From assault and battery to domestic violence, our firm takes a proactive approach to ensure your side of the story is heard.</p></div></a>
            <a className="srv reveal" href="https://msklawyer.com/juvenile-crimes/"><div className="n">05</div><div><h3>Juvenile Crimes</h3><p>Protecting the futures of young clients is a priority. We handle juvenile cases with the care and dedication they deserve, minimizing long-term repercussions.</p></div></a>
            <a className="srv reveal" href="https://msklawyer.com/areas-of-practice/"><div className="n">06</div><div><h3>And more!</h3><p>Homicide, sex crimes, theft, weapons charges, federal defense and beyond. Explore every practice area Marc defends across San Diego County.</p></div></a>
          </div>
        </div>
      </section>

      <section className="serving">
        <div className="wrap">
          <span className="eyebrow">Serving All of San Diego County</span>
          <h2 style={{ fontSize: "clamp(1.9rem,3.8vw,2.7rem)", marginTop: 12 }}>Located in the heart of San Diego</h2>
          <p>Marc Kohnen proudly serves clients across the county. We understand the stress of facing criminal charges and are here to support you at every step, providing compassionate yet assertive legal representation.</p>
          <div className="counties"><span>Downtown San Diego</span><span>Chula Vista</span><span>El Cajon</span><span>Vista</span><span>Carlsbad</span><span>Oceanside</span><span>La Mesa</span><span>Escondido</span><span>National City</span></div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">What Clients Say About Marc</span>
            <h2>Carrying glowing recommendations &amp; 5-star reviews</h2>
          </div>
          <div className="rgrid">
            <div className="rev reveal"><div className="q">&ldquo;</div><div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>Please don&rsquo;t go anywhere else, call Marc Kohnen. He gets right back to you and is so efficient! I was a nervous wreck when my son got his SECOND DUI. As of now — my son is sober, completed his education, and is flourishing at his job.</p><div className="who">Patti M.<small>Google Review</small></div></div>
            <div className="rev reveal"><div className="q">&ldquo;</div><div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>I highly recommend hiring Marc Kohnen. He is very knowledgeable, extremely professional, friendly and communicative. I believe Marc provided me with the best possible representation, and his retainer was very reasonable.</p><div className="who">Jeff N.<small>Verified Review</small></div></div>
            <div className="rev reveal"><div className="q">&ldquo;</div><div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>Mr. Kohnen eased our worries and fears quickly and guided us to an outcome that was better than any we could have hoped for. If you find yourself in need of a criminal/DUI attorney, I highly recommend hiring Marc Kohnen.</p><div className="who">Ilea S.<small>Yelp Review</small></div></div>
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
            <a className="post reveal" href="https://msklawyer.com/blog/"><div className="ph"><span>DUI Defense</span></div><div className="pad"><h3>Affordable DUI Attorneys in San Diego, CA</h3><p>DUIs can be as simple as being a bit over the limit when stopped for a minor traffic violation, or as complex as allegedly causing a major car accident resulting in severe injuries to multiple parties.</p></div></a>
            <a className="post reveal" href="https://msklawyer.com/blog/"><div className="ph"><span>Domestic Violence</span></div><div className="pad"><h3>Can I Get Arrested for Domestic Violence During Coronavirus</h3><p>If you&rsquo;re taking the time to read our newest law firm article, then chances are high either you, or someone you love, is facing a criminal charge.</p></div></a>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2>Let Marc become your voice in the court</h2>
          <p>No matter how tough, Marc is here to deliver the same high-quality results that have earned him the reputation of San Diego&rsquo;s best criminal defense attorney. Reach out today for a confidential consultation.</p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <a className="btn btn-gold" href="tel:6193982500">Call (619) 398-2500</a>
            <a className="btn btn-white" href="https://msklawyer.com/contact-marc/">Contact Marc</a>
          </div>
        </div>
      </section>

      <footer className="site">
        <div className="wrap">
          <div className="fgrid">
            <div>
              <img className="flogo" src="/assets/footer-logo.png" alt="Kohnen Law" />
              <p style={{ maxWidth: 300 }}>The Law Office of Marc S. Kohnen — trusted criminal defense representation for all of San Diego County.</p>
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
                <li><a href="https://msklawyer.com/san-diego-criminal-defense-lawyer/">San Diego Criminal Defense</a></li>
                <li><a href="https://msklawyer.com/san-diego-federal-criminal-defense-attorney/white-collar-crime-attorney-san-diego/">Federal Criminal Defense</a></li>
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
              <h4>Contact Us</h4>
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
