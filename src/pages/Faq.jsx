import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import BigCta from "../components/BigCta.jsx";

/* All seven FAQs migrated from msklawyer.com/faq/ */
const FAQS = [
  {
    q: "Why should I hire an attorney when I'm innocent?",
    a: [
      "Even if you are innocent, the state government has several resources to use against you in court. That's why it's essential to have an expert criminal defense attorney by your side to navigate the litigation process.",
    ],
  },
  {
    q: "Does hiring a lawyer help even when I know I'm guilty?",
    a: [
      "Absolutely. A skillful lawyer can determine if your rights were violated and have your case dismissed under California law. Besides that, an attorney also fights to reduce your charges and sentencing, along with helping you understand the legal complications.",
    ],
  },
  {
    q: "Is it permitted for the police to search me without a warrant in San Diego?",
    a: [
      "If the San Diego police can find enough evidence of you committing a crime, or if you are found to be in the process of committing one, then they can perform an appropriate search.",
      "Having an expert defense attorney helps in evaluating if the police searched you illegally. In turn, this helps declare the unlawfully obtained evidence inadmissible in court.",
    ],
  },
  {
    q: "Can I be punished if I've only attempted to commit a crime?",
    a: [
      "Attempting to commit a crime is a crime in itself, according to many jurisdictions. This serves as a showcase for others inclined to commit crimes.",
      "If you're found guilty of attempting a crime, the prosecutor must prove beyond doubt that you were planning a crime and had actually begun to commit it, too. Here, hiring a knowledgeable attorney can help your case in reducing the sentence or fine.",
    ],
  },
  {
    q: "What's the difference between a felony and a misdemeanor charge?",
    a: [
      "As per California law, a misdemeanor is punishable with up to one year in prison with a fine of no more than $1,000. A misdemeanor can include crimes such as DUI, theft, shoplifting, etc.",
      "Being charged with a felony can lead to severe consequences with extensive fines and lengthy sentences, even life in prison. Felony crimes include rape, murder, robbery, etc.",
    ],
  },
  {
    q: "What is a white-collar crime?",
    a: [
      "A white-collar crime is a term used to define crimes committed by a businessman or someone professional. These types of crimes include tax fraud, embezzlement, securities fraud, etc.",
    ],
  },
  {
    q: "How much will it cost me to hire Marc Kohnen as my criminal defense attorney in San Diego?",
    a: [
      "Unfortunately, it's not possible to give a one-size-fits-all answer. Since different clients require different services, it depends on the charges you face. Having said that, you can schedule an initial consultation with Marc to evaluate your options and discuss everything in detail. The ultimate goal remains to offer you the best and most affordable representation in court without adding a financial burden on your shoulders.",
    ],
  },
];

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
