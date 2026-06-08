import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import "../styles/gallery.css";

const DESIGNS = [
  {
    to: "/design-1",
    n: "Design 1",
    sub: "Professional & Sleek",
    title: "The Refined Firm",
    blurb:
      "Ivory, deep navy and brass with an editorial serif. Calm, premium and authoritative — sleek and confident without shouting. Built for trust.",
    meta: "Fraunces + Mulish · Editorial / luxury",
    sw: "sw1",
  },
  {
    to: "/design-2",
    n: "Design 2",
    sub: "Modernized Original",
    title: "The Upgrade",
    blurb:
      "The current msklawyer.com — same navy & gold identity and section order, rebuilt clean, fast and fully mobile-first. Familiar, just better.",
    meta: "Playfair Display + Figtree · Classic, modernized",
    sw: "sw2",
  },
  {
    to: "/design-3",
    n: "Design 3",
    sub: "Bold & Cinematic",
    title: "Not Guilty",
    blurb:
      "Marc's navy & gold identity turned cinematic — oversized type, motion and the front-page acquittal as the centerpiece. Unforgettable.",
    meta: "Anton + Archivo + Manrope · Cinematic, high-impact",
    sw: "sw3",
  },
  {
    to: "/design-4",
    n: "Design 4",
    sub: "The Kinetic Edition",
    title: "Front Page",
    blurb:
      "A living newspaper. Parallax newsprint, a kinetic word-swapping headline and counter-scrolling tickers — Design 3's DNA pushed as far as it goes.",
    meta: "Bebas Neue + Archivo + Space Grotesk · Kinetic, editorial",
    sw: "sw4",
  },
];

export default function Gallery() {
  usePageMeta({
    title: "Kohnen Law — Four Website Designs",
    description:
      "Four homepage design directions for The Law Office of Marc S. Kohnen, criminal defense attorney in San Diego, CA.",
    themeColor: "#0a1428",
    bodyBg: "#0a1428",
  });

  return (
    <div className="gallery">
      <div className="wrap">
        <header className="head">
          <img className="logo" src="/assets/logo.png" alt="Kohnen Law" />
          <span className="badge">Kohnen Law · Website Redesign</span>
          <h1>Four Design Directions</h1>
          <p>
            Homepage concepts for Marc S. Kohnen, all built with the real content and assets from
            msklawyer.com — now in React, responsive on web and mobile.
          </p>
          <div className="seo">
            <b>SEO preserved across all four:</b> identical <b>&lt;title&gt;</b>, meta description,
            <b> robots: follow, index</b>, the original H1 and section headings, and the existing
            practice-area link structure. Only the look &amp; feel changes.
          </div>
        </header>

        <div className="grid">
          {DESIGNS.map((d) => (
            <Link className="card" to={d.to} key={d.to}>
              <div className={`sw ${d.sw}`}>
                <b>{d.n}</b>
              </div>
              <div className="body">
                <div className="sub">{d.sub}</div>
                <h2>{d.title}</h2>
                <p>{d.blurb}</p>
                <div className="meta">{d.meta}</div>
                <span className="open">Preview {d.n} &rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        <p className="note">
          Real headings, bio &amp; copy from msklawyer.com throughout. Nav links point to the live
          msklawyer.com pages so internal link structure and SEO stay intact. Photos, logo, badges
          and reviews are pulled from Marc&rsquo;s current site.
        </p>
      </div>
    </div>
  );
}
