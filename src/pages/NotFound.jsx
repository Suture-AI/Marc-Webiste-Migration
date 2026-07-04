import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import BigCta from "../components/BigCta.jsx";

export default function NotFound() {
  usePageMeta({
    title: "Page Not Found - Marc S. Kohnen, San Diego Criminal Defense",
    description:
      "The page you're looking for doesn't exist. Find San Diego criminal defense resources from the Law Office of Marc S. Kohnen.",
    themeColor: "#05080f",
    bodyBg: "#05080f",
  });

  return (
    <>
      <PageHero
        eyebrow="404"
        title="This Page Doesn't Exist"
        sub="The address may have changed, or the link you followed is out of date. Everything on the site is one click away below — and Marc is one call away, day or night."
        crumbs={[["Page Not Found", null]]}
        cta={false}
      />

      <section className="block" style={{ paddingTop: 64 }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <p style={{ color: "var(--muted)", marginBottom: 28 }}>
            Try one of these instead:
          </p>
          <p style={{ display: "flex", flexWrap: "wrap", gap: "14px 28px", justifyContent: "center" }}>
            <Link to="/" style={{ color: "var(--gold-2)" }}>Home</Link>
            <Link to="/areas-of-practice/" style={{ color: "var(--gold-2)" }}>Areas of Practice</Link>
            <Link to="/result/" style={{ color: "var(--gold-2)" }}>Case Results</Link>
            <Link to="/in-the-news/" style={{ color: "var(--gold-2)" }}>In the News</Link>
            <Link to="/meet-marc/" style={{ color: "var(--gold-2)" }}>Meet Marc</Link>
            <Link to="/faq/" style={{ color: "var(--gold-2)" }}>FAQ</Link>
            <Link to="/contact-marc/" style={{ color: "var(--gold-2)" }}>Contact</Link>
          </p>
        </div>
      </section>

      <BigCta />
    </>
  );
}
