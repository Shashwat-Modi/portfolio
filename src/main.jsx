import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import posthog from "posthog-js";
import "./index.css";
import App from "./App.jsx";

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: "2026-05-30",
});

// StrictMode is intentionally omitted: its dev-only double-invoked mount
// pass was producing a visible double-flicker through Layout's
// AnimatePresence route transition. It has no effect on production builds.
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
