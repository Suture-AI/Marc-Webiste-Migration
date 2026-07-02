import { Link } from "react-router-dom";
import "../styles/back-to-gallery.css";

export default function BackToGallery() {
  return (
    <Link className="back-to-gallery" to="/" aria-label="Back to all designs">
      <span aria-hidden="true">&larr;</span> All designs
    </Link>
  );
}
