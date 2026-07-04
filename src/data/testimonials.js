/* Real client reviews migrated from the msklawyer.com homepage ("What Clients
   Say About Marc"). Text verbatim apart from Mark→Marc spelling fixes.
   `tags` match practice-area keys so each practice page can surface a
   relevant review in its rail. */
export const TESTIMONIALS = [
  {
    name: "Teena E.",
    tags: ["criminal-defense", "violent-crimes"],
    quote:
      "Marc was the defense attorney for my brother back in 2013. He was awesome. The prosecutor was trying to pin 21 counts and 10 years on my brother — Marc was able to get it down to 3 counts and 3 years. Thank you thank you thank you for the wonderful work you were able to do.",
  },
  {
    name: "Patti M.",
    tags: ["dui"],
    quote:
      "Please don't go anywhere else, call Marc Kohnen. I was a nervous wreck when my son got his SECOND DUI — I just knew his life was over. He really influenced my son. As of now my son is sober, completed his education, and is flourishing at his job.",
  },
  {
    name: "L. H.",
    tags: ["dui"],
    quote:
      "Far beyond the best attorney you will find! Five years ago I hired him for my DUI case; I revisited him for an expungement to clear my record — approved! Now I can apply for my real estate license. Marc Kohnen and his assistant go above and beyond.",
  },
  {
    name: "Stacy B.",
    tags: ["white-collar", "identity-theft", "criminal-defense"],
    quote:
      "I consulted several well-known local attorneys but they all seemed so phony. I brought my case to Marc one day, and he actually read my police reports and witness statements. None of the other attorneys made any effort to actually read it and see what was happening.",
  },
  {
    name: "Ilea S.",
    tags: ["dui", "criminal-defense"],
    quote:
      "While going through one of the most terrifying experiences of our lives, Mr. Kohnen eased our worries and fears quickly and guided us to an outcome better than any we could have hoped for. You won't be disappointed.",
  },
  {
    name: "Jeff N.",
    tags: ["criminal-defense", "theft"],
    quote:
      "Very knowledgeable, extremely professional, friendly and communicative. Marc advised me to do one thing prior to my hearing which probably saved me $1,000 in fines. He always replied to emails and calls, usually within a day. The best possible representation, and his retainer was very reasonable.",
  },
  {
    name: "DyLon G.",
    tags: ["violent-crimes", "criminal-defense"],
    quote:
      "Marc is a great lawyer. Long story short: with Marc on my team I only did a year in county while facing 6 in prison. He helped me with a payment plan and was always prompt responding to my frantic calls.",
  },
  {
    name: "Aston O.",
    tags: ["criminal-defense"],
    quote:
      "Amazing lawyer! He saved my case after another incompetent lawyer almost ruined it. He is very diligent and has great attention to detail. Thank you Marc!",
  },
  {
    name: "Erik G.",
    tags: ["dui"],
    quote:
      "Just wrapped up my DUI case and couldn't be more content with the end result. Marc was open and honest about the possible outcomes and came through with the best deal I could get in my situation. I would recommend Marc and his team with no hesitation.",
  },
];

/* Best-matching review for a practice area, falling back to general praise. */
export function testimonialFor(key, parentKey) {
  return (
    TESTIMONIALS.find((t) => t.tags.includes(key)) ||
    TESTIMONIALS.find((t) => parentKey && t.tags.includes(parentKey)) ||
    TESTIMONIALS.find((t) => t.tags.includes("criminal-defense"))
  );
}
