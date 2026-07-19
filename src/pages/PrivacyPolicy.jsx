import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";

const UPDATED = "July 19, 2026";

export default function PrivacyPolicy() {
  usePageMeta({
    title: "Privacy Policy - Law Office of Marc S. Kohnen",
    description:
      "How the Law Office of Marc S. Kohnen collects, uses and protects the information you share through this website, including your rights under California law.",
    themeColor: "#05080f",
    bodyBg: "#05080f",
  });

  return (
    <>
      <PageHero
        eyebrow="Your Privacy"
        title="Privacy Policy"
        sub={`How this website handles the information you share with us. Last updated ${UPDATED}.`}
        crumbs={[["Privacy Policy", null]]}
        cta={false}
      />

      <div className="wrap pagegrid">
        <article className="prose">
          <section className="reveal">
            <p className="lead">
              The Law Office of Marc S. Kohnen (&ldquo;the firm,&rdquo; &ldquo;we&rdquo;) respects
              your privacy. This policy explains what information this website collects, how it is
              used, and the choices you have. It applies to msklawyer.com and any preview versions
              of this site operated by the firm.
            </p>
          </section>

          <section className="reveal">
            <h2>Information You Provide</h2>
            <p>
              The only personal information this website collects is what you choose to submit
              through the contact form or by emailing or calling us: your name, email address,
              phone number, and the message you write. We use it for one purpose — responding to
              your inquiry and, if you retain the firm, representing you. We do not sell, rent, or
              share your information with third parties for their marketing purposes.
            </p>
            <p>
              Contact-form submissions are transmitted and delivered to the firm by Formspree, Inc.,
              a form-processing service acting on our behalf. Formspree processes your submission
              solely to deliver it to us; its handling of that data is described in{" "}
              <a href="https://formspree.io/legal/privacy-policy/" rel="noopener nofollow">
                Formspree&rsquo;s privacy policy
              </a>.
            </p>
          </section>

          <section className="reveal">
            <h2>Confidentiality of Case Inquiries</h2>
            <p>
              Consultations are confidential. Information you share when seeking legal advice is
              treated with the care required of a law practice, whether or not you ultimately retain
              the firm. Please avoid including sensitive case details in an unencrypted email or web
              form — the safest first step is a phone call to{" "}
              <a href="tel:6193982500">(619) 398-2500</a>.
            </p>
          </section>

          <section className="reveal">
            <h2>Information Collected Automatically</h2>
            <p>
              This site does not run advertising trackers or analytics profiles. Like most websites,
              our hosting providers keep standard server logs (IP address, browser type, pages
              requested) for security and reliability. Fonts are served from Google Fonts or from
              this site directly; embedded maps on the contact page are served by Google Maps, which
              may set its own cookies subject to{" "}
              <a href="https://policies.google.com/privacy" rel="noopener nofollow">
                Google&rsquo;s privacy policy
              </a>.
            </p>
          </section>

          <section className="reveal">
            <h2>Your California Privacy Rights</h2>
            <p>
              California residents may have rights under the California Consumer Privacy Act (CCPA),
              including the right to know what personal information we hold about you, to request
              its deletion, and to be free from discrimination for exercising those rights. The firm
              does not sell personal information. To exercise any of these rights, contact us at{" "}
              <a href="mailto:marc@msklawyer.com">marc@msklawyer.com</a> or (619) 398-2500 and we
              will respond as the law requires.
            </p>
          </section>

          <section className="reveal">
            <h2>Data Retention &amp; Security</h2>
            <p>
              Inquiry messages are kept only as long as needed to respond and to meet the firm&rsquo;s
              professional-responsibility obligations, then deleted. We use HTTPS across the entire
              site to protect information in transit.
            </p>
          </section>

          <section className="reveal">
            <h2>Changes &amp; Contact</h2>
            <p>
              If this policy changes, the updated version will be posted here with a new
              &ldquo;last updated&rdquo; date. Questions about this policy can be directed to the
              Law Office of Marc S. Kohnen, 425 Tenth Ave, San Diego, CA 92101 ·{" "}
              <a href="tel:6193982500">(619) 398-2500</a> ·{" "}
              <a href="mailto:marc@msklawyer.com">marc@msklawyer.com</a>.
            </p>
            <p>
              This website is attorney advertising. Nothing on it is legal advice, and neither
              reading it nor contacting the firm creates an attorney&ndash;client relationship —
              see the sitewide notice in the footer. <Link to="/contact-marc/">Contact us</Link> to
              speak with Marc directly.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
