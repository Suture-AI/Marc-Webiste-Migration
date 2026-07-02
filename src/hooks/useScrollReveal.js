import { useEffect } from "react";

/**
 * Reveal-on-scroll. Watches every `.reveal` descendant of `ref` and adds
 * `.in` when it enters the viewport, with a small staggered delay so groups
 * of cards cascade in. Mirrors the IntersectionObserver in the originals.
 */
export function useScrollReveal(ref, { threshold = 0.12, stagger = 90, groups = 3, rescanKey } = {}) {
  useEffect(() => {
    const root = ref?.current;
    if (!root) return;

    const els = Array.from(root.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("in"));
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
      { threshold }
    );

    els.forEach((el, i) => {
      el.style.transitionDelay = `${(i % groups) * stagger}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, [ref, threshold, stagger, groups, rescanKey]);
}
