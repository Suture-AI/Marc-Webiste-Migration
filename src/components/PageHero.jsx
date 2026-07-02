import { Link } from "react-router-dom";

/* Compact skyline hero for interior pages, with breadcrumb trail.
   `crumbs` is an array of [label, path]; the final crumb renders unlinked. */
export default function PageHero({ eyebrow, title, sub, crumbs = [], cta = true }) {
  return (
    <section className="pagehero">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map(([label, to], i) => (
            <span key={label} style={{ display: "contents" }}>
              <span className="sep">/</span>
              {to && i < crumbs.length - 1 ? <Link to={to}>{label}</Link> : <span>{label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 style={eyebrow ? { marginTop: 14 } : undefined}>{title}</h1>
        {sub && <p className="sub">{sub}</p>}
        {cta && (
          <div className="hero-cta">
            <Link className="btn btn-gold" to="/contact-marc/">Free Case Review</Link>
            <a className="btn btn-ghost" href="tel:6193982500">Call (619) 398-2500</a>
          </div>
        )}
      </div>
    </section>
  );
}
