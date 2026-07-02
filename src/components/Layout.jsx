import { useRef, useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "../styles/design4.css";

const NAV = [
  ["About", "/meet-marc/"],
  ["Practice Areas", "/areas-of-practice/"],
  ["Case Results", "/result/"],
  ["In the News", "/in-the-news/"],
  ["FAQ", "/faq/"],
  ["Contact", "/contact-marc/"],
];

const navClass = ({ isActive }) => (isActive ? "on" : undefined);

/* Shared Design-4 shell: fixed navy backdrop, center-crest sticky bar with a
   split desktop nav, full-screen menu sheet on smaller screens, site footer. */
export default function Layout() {
  const root = useRef(null);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useScrollReveal(root, { groups: 4, stagger: 80, rescanKey: pathname });
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="d4" ref={root}>
      <div className="citybg" aria-hidden="true" />

      <div className="shell">
        <header className="bar">
          <div className="wrap navrow">
            <button className="menubtn" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>
              <i aria-hidden="true"><span></span><span></span></i>
              Menu
            </button>

            <div className="menu">
              <nav className="nav left" aria-label="Primary">
                {NAV.slice(0, 4).map(([label, to]) => (
                  <NavLink key={to} to={to} className={navClass}>{label}</NavLink>
                ))}
              </nav>
              <div className="right">
                <nav className="nav right" aria-label="Secondary">
                  {NAV.slice(4).map(([label, to]) => (
                    <NavLink key={to} to={to} className={navClass}>{label}</NavLink>
                  ))}
                </nav>
                <a className="callus" href="tel:6193982500">
                  Call us today<b>(619) 398-2500</b>
                </a>
              </div>
            </div>

            <Link className="crest" to="/">
              <img src="/assets/logo.png" alt="Kohnen Law logo" />
              <b>KOHNEN</b>
              <small>LAW</small>
            </Link>

            <a className="callbtn" href="tel:6193982500">Call</a>
          </div>
        </header>

        {/* full-screen menu sheet (small screens) */}
        <div className={`sheet${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="wrap sheet-top">
            <span className="sheet-brand">Kohnen <i>Law</i></span>
            <button className="sheet-close" onClick={() => setOpen(false)}>Close ✕</button>
          </div>
          <nav className="wrap sheet-nav" aria-label="Menu">
            {NAV.map(([label, to], i) => (
              <NavLink key={to} to={to} className={navClass} style={{ transitionDelay: `${60 + i * 45}ms` }}>
                <small>{String(i + 1).padStart(2, "0")}</small>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="wrap sheet-cta">
            <a className="btn btn-gold" href="tel:6193982500">Call (619) 398-2500</a>
            <span>Available 24/7 · Free, confidential case review</span>
          </div>
        </div>

        <Outlet />

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
                  <li><Link to="/areas-of-practice/">Areas of Practice</Link></li>
                  <li><Link to="/san-diego-criminal-defense-lawyer/">Criminal Defense</Link></li>
                  <li><Link to="/san-diego-federal-criminal-defense-attorney/">Federal Defense</Link></li>
                  <li><Link to="/san-diego-dui-attorney/">DUI Attorney</Link></li>
                </ul>
              </div>
              <div>
                <h4>Firm</h4>
                <ul>
                  <li><Link to="/meet-marc/">Meet Marc Kohnen</Link></li>
                  <li><Link to="/result/">Results</Link></li>
                  <li><Link to="/in-the-news/">In the News</Link></li>
                  <li><Link to="/faq/">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4>Contact</h4>
                <ul>
                  <li><a href="tel:6193982500">(619) 398-2500</a></li>
                  <li><a href="mailto:marc@msklawyer.com">marc@msklawyer.com</a></li>
                  <li>425 Tenth Ave, San Diego, CA 92101</li>
                  <li><Link to="/contact-marc/">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <p className="disclaimer">
              The Law Office of Marc S. Kohnen. All Rights Reserved 2026. This website is for
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
