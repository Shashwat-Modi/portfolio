import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// StrictMode is intentionally omitted: its dev-only double-invoked mount
// pass was producing a visible double-flicker through Layout's
// AnimatePresence route transition. It has no effect on production builds.
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
