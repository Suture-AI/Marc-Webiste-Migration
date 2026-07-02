import { useState } from "react";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";

/* Contact page migrated from msklawyer.com/contact-marc/. The form submits
   through Formspree. Create the form at https://formspree.io (free tier is
   fine), point it at marc@msklawyer.com, and paste its ID below — until then
   the form falls back to opening the visitor's mail client. */
const FORMSPREE_ID = "xbdvzvjn";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.1075772979343!2d-117.15756398529507!3d32.70976899471938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9535c0c93cb97%3A0x1e98987d66501ca9!2s425%20Tenth%20Ave%2C%20San%20Diego%2C%20CA%2092101%2C%20USA!5e0!3m2!1sen!2s!4v1627383787841!5m2!1sen!2s";

export default function Contact() {
  const [form, setForm] = useState({ name: "", title: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  usePageMeta({
    title: "Contact Marc Kohnen For San Diego Criminal Defense",
    description:
      "Get in touch with Marc Kohnen, experienced Criminal Defense attorney that you can rely on to fight for your rights and freedom.",
    themeColor: "#05080f",
    bodyBg: "#05080f",
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const mailtoFallback = () => {
    const body = encodeURIComponent(
      `Name: ${form.name}\nTitle: ${form.title}\nPhone: ${form.phone}\n\n${form.message}`
    );
    const subject = encodeURIComponent(`Criminal defense help — ${form.name}`);
    window.location.href = `mailto:marc@msklawyer.com?subject=${subject}&body=${body}`;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (FORMSPREE_ID === "YOUR_FORM_ID") {
      mailtoFallback();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          title: form.title,
          email: form.email,
          phone: form.phone,
          message: form.message,
          _subject: `Criminal defense help — ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setStatus("sent");
      setForm({ name: "", title: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        eyebrow="24-Hour Assistance"
        title="Contact Marc Today"
        sub="Located in Downtown San Diego near the Gaslamp District. Calls are answered around the clock — because arrests don't keep business hours."
        crumbs={[["Contact", null]]}
        cta={false}
      />

      <div className="wrap contactgrid">
        <div className="cinfo reveal">
          <div className="row">
            <div className="ic" aria-hidden="true">ADDR</div>
            <div>
              <b>Law Firm Address</b>
              <span>425 Tenth Ave, San Diego, CA 92101</span>
            </div>
          </div>
          <div className="row">
            <div className="ic" aria-hidden="true">24HR</div>
            <div>
              <b>24 Hour Office Line</b>
              <a href="tel:6193982500">(619) 398-2500</a>
            </div>
          </div>
          <div className="row">
            <div className="ic" aria-hidden="true">MAIL</div>
            <div>
              <b>Law Firm Email</b>
              <a href="mailto:marc@msklawyer.com">marc@msklawyer.com</a>
            </div>
          </div>
          <div className="row" style={{ borderBottom: 0 }}>
            <div className="ic" aria-hidden="true">★</div>
            <div>
              <b>Recognized Defense</b>
              <span style={{ fontSize: "1rem", fontFamily: "var(--body)", color: "var(--bone-2)" }}>
                <a href="https://www.avvo.com/attorneys/92101-ca-marc-kohnen-1754991.html" rel="noopener" style={{ fontSize: "1rem" }}>10.0 AVVO criminal defense rating</a>{" · "}
                <a href="https://www.yelp.com/biz/law-office-of-marc-s-kohnen-san-diego-2" rel="noopener" style={{ fontSize: "1rem" }}>50+ five-star Yelp reviews</a>{" · "}
                <a href="https://www.google.com/search?q=Google+reviews+marc+kohnen" rel="noopener" style={{ fontSize: "1rem" }}>Google testimonials</a>
              </span>
            </div>
          </div>
        </div>

        {status === "sent" ? (
          <div className="cform reveal in" role="status">
            <h3>Message sent.</h3>
            <p className="hint">
              Thank you — Marc personally reviews every message and will get back to you as soon as
              possible. If this is urgent, call the 24-hour line at{" "}
              <a href="tel:6193982500" style={{ color: "var(--gold-2)" }}>(619) 398-2500</a>.
            </p>
            <button className="btn btn-ghost" onClick={() => setStatus("idle")}>Send Another Message</button>
          </div>
        ) : (
          <form className="cform reveal" onSubmit={submit}>
            <h3>Criminal Defense Help</h3>
            <p className="hint">Free, confidential case evaluation. Marc personally reviews every message.</p>
            <div className="grid2">
              <div>
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" required value={form.name} onChange={set("name")} autoComplete="name" />
              </div>
              <div>
                <label htmlFor="cf-title">Title</label>
                <input id="cf-title" name="title" value={form.title} onChange={set("title")} />
              </div>
              <div>
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" required value={form.email} onChange={set("email")} autoComplete="email" />
              </div>
              <div>
                <label htmlFor="cf-phone">Phone</label>
                <input id="cf-phone" name="phone" type="tel" value={form.phone} onChange={set("phone")} autoComplete="tel" />
              </div>
            </div>
            <label htmlFor="cf-msg">Message</label>
            <textarea id="cf-msg" name="message" required value={form.message} onChange={set("message")} placeholder="Tell Marc briefly what happened — everything is confidential." />
            <button className="btn btn-gold" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            {status === "error" && (
              <p className="hint" style={{ marginTop: 14, color: "var(--gold-2)" }} role="alert">
                Something went wrong sending your message. Please try again, or call{" "}
                <a href="tel:6193982500">(619) 398-2500</a> — the line is answered 24 hours.
              </p>
            )}
          </form>
        )}
      </div>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <iframe
            className="mapframe"
            src={MAP_SRC}
            title="Map to the Law Office of Marc S. Kohnen — 425 Tenth Ave, San Diego"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
