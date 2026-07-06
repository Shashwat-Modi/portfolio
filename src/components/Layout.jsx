import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Starfield from "./Starfield";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col font-sans text-zinc-100">
      <Starfield />
      <div className="bg-noise" aria-hidden="true" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        {location.pathname !== "/" && (
          <footer className="border-t border-zinc-800/70 px-6 py-8 text-center text-xs tracking-wide text-stone-600 md:px-10">
            © {new Date().getFullYear()} Shashwat Modi
          </footer>
        )}
      </div>
    </div>
  );
}
