import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import PracticeArea from "./pages/PracticeArea.jsx";
import AreasOfPractice from "./pages/AreasOfPractice.jsx";
import MeetMarc from "./pages/MeetMarc.jsx";
import Results from "./pages/Results.jsx";
import InTheNews from "./pages/InTheNews.jsx";
import Faq from "./pages/Faq.jsx";
import Contact from "./pages/Contact.jsx";
import BranchCase from "./pages/BranchCase.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import NotFound from "./pages/NotFound.jsx";
import { PRACTICE_CONTENT } from "./data/practice/index.js";
import { byKey } from "./data/practiceAreas.js";

/* Build-time (prerender) route tree: everything imported eagerly, because
   renderToString cannot wait on lazy chunks. The browser bundle uses the
   code-split tree in App.jsx — keep the two route lists in sync. */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Suspense fallback={null}><Home /></Suspense>} />
        <Route path="/meet-marc/" element={<Suspense fallback={null}><MeetMarc /></Suspense>} />
        <Route path="/areas-of-practice/" element={<Suspense fallback={null}><AreasOfPractice /></Suspense>} />
        <Route path="/result/" element={<Suspense fallback={null}><Results /></Suspense>} />
        <Route path="/in-the-news/" element={<Suspense fallback={null}><InTheNews /></Suspense>} />
        <Route path="/faq/" element={<Suspense fallback={null}><Faq /></Suspense>} />
        <Route path="/contact-marc/" element={<Suspense fallback={null}><Contact /></Suspense>} />
        <Route path="/the-branch-case/" element={<Suspense fallback={null}><BranchCase /></Suspense>} />
        <Route path="/privacy-policy/" element={<Suspense fallback={null}><PrivacyPolicy /></Suspense>} />
        {PRACTICE_CONTENT.map((content) => (
          <Route
            key={content.key}
            path={byKey[content.key].path}
            element={<Suspense fallback={null}><PracticeArea content={content} /></Suspense>}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
