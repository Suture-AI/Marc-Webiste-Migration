import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.server.jsx";

/* Build-time renderer used by scripts/prerender.mjs to bake real HTML
   for every route. `url` must include the base path when one is set. */
export function render(url) {
  return renderToString(
    <StaticRouter location={url} basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <App />
    </StaticRouter>
  );
}
