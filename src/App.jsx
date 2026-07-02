import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import PracticeArea from "./pages/PracticeArea.jsx";
import AreasOfPractice from "./pages/AreasOfPractice.jsx";
import MeetMarc from "./pages/MeetMarc.jsx";
import Results from "./pages/Results.jsx";
import InTheNews from "./pages/InTheNews.jsx";
import Faq from "./pages/Faq.jsx";
import Contact from "./pages/Contact.jsx";
import { PRACTICE_CONTENT } from "./data/practice/index.js";
import { byKey } from "./data/practiceAreas.js";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/meet-marc/" element={<MeetMarc />} />
        <Route path="/areas-of-practice/" element={<AreasOfPractice />} />
        <Route path="/result/" element={<Results />} />
        <Route path="/in-the-news/" element={<InTheNews />} />
        <Route path="/faq/" element={<Faq />} />
        <Route path="/contact-marc/" element={<Contact />} />
        {PRACTICE_CONTENT.map((content) => (
          <Route
            key={content.key}
            path={byKey[content.key].path}
            element={<PracticeArea content={content} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
