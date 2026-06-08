import { Routes, Route } from "react-router-dom";
import Design1 from "./pages/Design1.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Design1 />} />
    </Routes>
  );
}
