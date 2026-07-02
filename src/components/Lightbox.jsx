import { useEffect } from "react";

/* Full-screen scrollable viewer for press clippings and photos. */
export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;
  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="cap">
        <span>{item.title} {item.outlet && <i>· {item.outlet}</i>}</span>
        <span>Close ✕</span>
      </div>
      <img src={item.src} alt={item.alt || item.title} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
