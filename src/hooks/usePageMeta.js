import { useEffect } from "react";

/**
 * Sets per-route document title, meta description, canonical and the
 * browser theme-color / body background. Restores nothing on unmount —
 * the next route overrides. Keeps the original msklawyer.com SEO intact.
 */
export function usePageMeta({ title, description, themeColor, bodyBg }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }

    if (themeColor) {
      let tag = document.querySelector('meta[name="theme-color"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "theme-color");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", themeColor);
    }

    const prevBg = document.body.style.background;
    if (bodyBg) document.body.style.background = bodyBg;
    window.scrollTo(0, 0);

    return () => {
      document.body.style.background = prevBg;
    };
  }, [title, description, themeColor, bodyBg]);
}
