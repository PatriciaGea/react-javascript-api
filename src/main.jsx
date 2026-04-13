import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";

// REVIEW: Root `package.json` `start` runs `npm --prefix api_users install` on every start — slow for production; prefer install at build time and `start` = `node server.js` only.
const basename = import.meta.env.BASE_URL;

// REVIEW: `getElementById('root')` can be null if markup is wrong; guard or assert before `createRoot` for a clearer failure mode.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
