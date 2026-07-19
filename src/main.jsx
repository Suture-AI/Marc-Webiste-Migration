import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App, { preloadRoute } from "./App.jsx";
import "./styles/base.css";

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/* Pre-rendered pages hydrate; dev server renders fresh. Routes are
   code-split, so warm the landing route's chunk first — hydration then runs
   synchronously against the prerendered HTML with no fallback flash. */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const path = window.location.pathname.startsWith(base)
  ? window.location.pathname.slice(base.length) || "/"
  : window.location.pathname;

preloadRoute(path)
  .catch(() => {})
  .then(() => {
    if (container.hasChildNodes()) {
      hydrateRoot(container, app);
    } else {
      createRoot(container).render(app);
    }
  });
