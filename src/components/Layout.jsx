import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 font-sans text-zinc-100">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-zinc-800/70 px-6 py-8 text-center text-xs tracking-wide text-stone-600 md:px-10">
        © {new Date().getFullYear()} Shashwat Modi
      </footer>
    </div>
  );
}
