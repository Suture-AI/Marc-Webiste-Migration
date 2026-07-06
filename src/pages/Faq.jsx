import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import BigCta from "../components/BigCta.jsx";
import { FAQS } from "../data/faq.js";

/* FAQPage structured data — baked into the pre-rendered HTML so the page is
   eligible for FAQ rich results. Content is the static FAQS array above. */
const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
  })),
});

export default function Faq() {
  usePageMeta({
    title: "FAQs - Criminal Defense Attorney",
    description:
      "Even if you are innocent, the state government has several resources to use against you in court. That's why it's essential to have an expert criminal defense",
    themeColor: "#05080f",
    bodyBg: "#05080f",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      <PageHero
        eyebrow="Straight Answers"
        title="Frequently Asked Questions"
        sub="The questions every client asks — answered plainly. For anything about your specific case, the consultation is free and confidential."
        crumbs={[["FAQ", null]]}
      />

      <section className="block" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="faqlist">
            {FAQS.map((f, i) => (
              <details key={f.q} open={i === 0} className="reveal">
                <summary>{f.q}</summary>
                <div className="a">
                  {f.a.map((p) => <p key={p}>{p}</p>)}
                </div>
              </details>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 40, color: "var(--muted)" }}>
            Have a question about your own case?{" "}
            <Link to="/contact-marc/" style={{ color: "var(--gold-2)" }}>Ask Marc directly</Link> — it&rsquo;s free and confidential.
          </p>
        </div>
      </section>

      <BigCta />
    </>
  );
}
