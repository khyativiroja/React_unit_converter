import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Length from "./Length.jsx";
import Weight from "./Weight.jsx";
import Time from "./Time.jsx";
import Area from "./Area.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<h2>Page Not Found</h2>} />
        <Route path="/" element={<Length />} />
        <Route path="/Length" element={<Length />} />
        <Route path="/Weight" element={<Weight />} />
        <Route path="/Time" element={<Time />} />
        <Route path="/Area" element={<Area />} />
      </Routes>
    </Router>
  </StrictMode>
);
