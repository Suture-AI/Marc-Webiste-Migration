import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery.jsx";
import Design1 from "./pages/Design1.jsx";
import Design2 from "./pages/Design2.jsx";
import Design3 from "./pages/Design3.jsx";
import Design4 from "./pages/Design4.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/design-1" element={<Design1 />} />
      <Route path="/design-2" element={<Design2 />} />
      <Route path="/design-3" element={<Design3 />} />
      <Route path="/design-4" element={<Design4 />} />
      <Route path="*" element={<Gallery />} />
    </Routes>
  );
}
