import { Routes, Route } from "react-router-dom";
import Design4 from "./pages/Design4.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Design4 />} />
    </Routes>
  );
}
