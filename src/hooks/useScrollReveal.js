import { useEffect } from "react";

/**
 * Reveal-on-scroll. Watches every `.reveal` descendant of `ref` and adds
 * `.in` when it enters the viewport, with a small staggered delay so groups
 * of cards cascade in. Mirrors the IntersectionObserver in the originals.
 */
export function useScrollReveal(ref, { threshold = 0, stagger = 55, groups = 3, rescanKey } = {}) {
  useEffect(() => {
    const root = ref?.current;
    if (!root) return;

    if (!("IntersectionObserver" in window)) {
      root.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      /* Positive bottom rootMargin starts the reveal ~120px before the element
         scrolls into view, so content is already visible when it arrives. */
      { threshold, rootMargin: "0px 0px 120px 0px" }
    );

    /* Route chunks are code-split, so a page's .reveal elements can mount
       after this effect runs. Scan now, then let a MutationObserver pick up
       late arrivals — the WeakSet keeps delays/observation idempotent. */
    const seen = new WeakSet();
    let count = 0;
    const scan = () => {
      root.querySelectorAll(".reveal").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        el.style.transitionDelay = `${(count++ % groups) * stagger}ms`;
        io.observe(el);
      });
    };
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(root, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [ref, threshold, stagger, groups, rescanKey]);
}
