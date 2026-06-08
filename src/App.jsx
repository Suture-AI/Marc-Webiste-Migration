import { Routes, Route } from "react-router-dom";
import Design2 from "./pages/Design2.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Design2 />} />
    </Routes>
  );
}
