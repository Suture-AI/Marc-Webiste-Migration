import { Link } from "react-router-dom";

/* Skyline-reprise closing CTA shared by every page. */
export default function BigCta({
  title = <>Don&rsquo;t wait. <em>Get Marc on your side.</em></>,
  text = "The sooner Marc is on your case, the more he can do. Get a free, confidential consultation today and let Marc become your voice in the court.",
}) {
  return (
    <section className="block bigcta">
      <div className="wrap">
        <div className="sec-title reveal">{title}</div>
        <p className="reveal">{text}</p>
        <div className="hero-cta reveal">
          <a className="btn btn-gold" href="tel:6193982500">Call (619) 398-2500</a>
          <Link className="btn btn-ghost" to="/contact-marc/">Contact Marc</Link>
        </div>
      </div>
    </section>
  );
}
