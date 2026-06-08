import { Routes, Route } from "react-router-dom";
import Design3 from "./pages/Design3.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Design3 />} />
    </Routes>
  );
}
