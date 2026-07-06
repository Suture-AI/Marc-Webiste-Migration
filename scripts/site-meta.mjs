/* Canonical site origin and per-page meta for the eight core (non-practice)
   routes. Shared by prerender.mjs (head tags) and generate-seo.mjs
   (llms.txt / sitemap). Practice-page meta lives in src/data/practice/. */
export const SITE = "https://msklawyer.com";

export const CORE_ROUTES = [
  {
    path: "/",
    page: "src/pages/Home.jsx",
    title: "Criminal Defense Attorney In San Diego, CA - Marc S. Kohnen",
    description:
      "Looking for a trusted criminal defense attorney in San Diego, CA? Marc Kohnen, an experienced criminal defense lawyer in San Diego, fights to protect your rights.",
  },
  {
    path: "/meet-marc/",
    page: "src/pages/MeetMarc.jsx",
    title: "Marc S. Kohnen - San Diego Criminal Defense Attorney",
    description:
      "Meet Marc, San Diego Criminal Defense Attorney with decades of criminal law experience. Get the best defense for your situation when you call for an evaluation.",
  },
  {
    path: "/areas-of-practice/",
    page: "src/pages/AreasOfPractice.jsx",
    title: "San Diego Criminal Defense Attorney Services - Marc Kohnen",
    description:
      "With a wide variety of criminal defense attorney services in San Diego, Marc Kohnen has the experience and tools to fight for your freedom.",
  },
  {
    path: "/result/",
    page: "src/pages/Results.jsx",
    title: "Criminal Defense Attorney | Proven Results at MSK Lawyer",
    description:
      "Actual case results from the Law Office of Marc S. Kohnen — not-guilty verdicts, dismissals and reduced charges across DUI, drug, violent-crime, theft and sex-crime cases in San Diego.",
  },
  {
    path: "/in-the-news/",
    page: "src/pages/InTheNews.jsx",
    title: "In the News - San Diego Criminal Defense Attorney Marc S. Kohnen",
    description:
      "CNN, the Washington Post, the Today Show, TMZ and every San Diego station — see the national and local press coverage of Marc Kohnen's criminal defense cases.",
  },
  {
    path: "/faq/",
    page: "src/pages/Faq.jsx",
    title: "FAQs - Criminal Defense Attorney",
    description:
      "Even if you are innocent, the state government has several resources to use against you in court. That's why it's essential to have an expert criminal defense",
  },
  {
    path: "/contact-marc/",
    page: "src/pages/Contact.jsx",
    title: "Contact Marc Kohnen For San Diego Criminal Defense",
    description:
      "Get in touch with Marc Kohnen, experienced Criminal Defense attorney that you can rely on to fight for your rights and freedom.",
  },
  {
    path: "/the-branch-case/",
    page: "src/pages/BranchCase.jsx",
    title: "The Robert Branch Acquittal — Anatomy of a NOT GUILTY Verdict | Marc S. Kohnen",
    description:
      "How San Diego criminal defense attorney Marc Kohnen took a felony assault case the whole city was watching to a NOT GUILTY verdict — and the front page of the Union-Tribune.",
  },
];
