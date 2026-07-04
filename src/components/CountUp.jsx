import { useEffect, useRef, useState } from "react";

/* Animates a number from 0 when it scrolls into view. Respects
   prefers-reduced-motion by snapping straight to the final value. */
export default function CountUp({ value, decimals = 0, prefix = "", suffix = "", duration = 1400 }) {
  const el = useRef(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const node = el.current;
    if (!node) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setShown(value);
      return;
    }
    let raf;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setShown(value * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={el}>
      {prefix}
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  );
}
