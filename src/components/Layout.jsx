import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Chatbot from "./Chatbot";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col bg-snowfall font-sans text-dark-night">
      <div className="bg-noise" aria-hidden="true" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <div
            key={location.pathname}
            className="opacity-100 transition-opacity duration-300 ease-in-out starting:opacity-0"
          >
            <Outlet />
          </div>
        </main>
        {location.pathname !== "/" && (
          <footer className="border-t border-temple-grey px-6 py-8 text-center font-label text-xs font-light tracking-wide text-charcoal md:px-10">
            © <span className="font-oldstyle-nums font-serif font-bold">{new Date().getFullYear()}</span> Shashwat Modi
          </footer>
        )}
      </div>
      <Chatbot />
    </div>
  );
}
