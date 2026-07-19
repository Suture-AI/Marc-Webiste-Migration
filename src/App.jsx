import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import { AREAS } from "./data/practiceAreas.js";
import { lazyRoute } from "./lazyRoute.jsx";

/* Browser route tree: every page (and each practice-area content module) is
 * its own chunk, so a visitor downloads only the page they're on. The
 * prerender pass uses the eager tree in App.server.jsx — keep them in sync.
 * main.jsx preloads the landing route before hydrating (see lazyRoute.jsx).
 */
const page = (id, importer) =>
  lazyRoute(id, () => [importer()], ([m]) => {
    const Page = m.default;
    return <Page />;
  });

const CORE = {
  "/": page("home", () => import("./pages/Home.jsx")),
  "/meet-marc/": page("meet-marc", () => import("./pages/MeetMarc.jsx")),
  "/areas-of-practice/": page("areas", () => import("./pages/AreasOfPractice.jsx")),
  "/result/": page("results", () => import("./pages/Results.jsx")),
  "/in-the-news/": page("news", () => import("./pages/InTheNews.jsx")),
  "/faq/": page("faq", () => import("./pages/Faq.jsx")),
  "/contact-marc/": page("contact", () => import("./pages/Contact.jsx")),
  "/the-branch-case/": page("branch", () => import("./pages/BranchCase.jsx")),
  "/privacy-policy/": page("privacy", () => import("./pages/PrivacyPolicy.jsx")),
};

const PRACTICE = Object.fromEntries(
  AREAS.map((a) => [
    a.path,
    lazyRoute(
      `practice:${a.key}`,
      () => [import("./pages/PracticeArea.jsx"), import(`./data/practice/${a.key}.js`)],
      ([tpl, content]) => {
        const Template = tpl.default;
        return <Template content={content.default} />;
      },
    ),
  ]),
);

const ROUTE_COMPONENTS = { ...CORE, ...PRACTICE };

/* Warm a route's chunk(s); resolves immediately for unknown paths (404). */
export function preloadRoute(path) {
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  const C = ROUTE_COMPONENTS[withSlash] || ROUTE_COMPONENTS[path];
  return C?.preload ? C.preload() : Promise.resolve();
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {Object.entries(ROUTE_COMPONENTS).map(([path, C]) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={null}>
                <C />
              </Suspense>
            }
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
