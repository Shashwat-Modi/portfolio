import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Chatbot from "./Chatbot";

const modalContent = {
  guidelines: {
    title: "Canvas Guidelines",
    text: "The Canvas is a high-signal analytical ledger. Submissions must present reasoned arguments, creative optimization frameworks, or structured data insights. Automated scripts, bad-faith critiques, or superficial content will be excluded during the moderation process. Submission grants the platform a non-exclusive license to format and render the text asset.",
  },
  terms: {
    title: "Terms of Use",
    text: "All structural layouts, functional web mechanics, and repository logic are open-sourced under the MIT License. You are free to fork and modify the architecture for personal education. However, this clearance strictly prohibits the cloning or use of the author's personal name, likeness, and biographical milestones.",
  },
  privacy: {
    title: "Privacy Policy",
    text: "Data integrity is maintained under zero-exposure protocols. User name and email strings collected during public submissions are used solely for backend log validation and security metrics. Emails are permanently isolated from the public frontend layout layer and are never shared or distributed.",
  },
};

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact") || document.querySelector(".contact-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

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
        <footer style={{ width: '100%', padding: '4rem 2rem 3rem', borderTop: '1px solid #dcd6cd', backgroundColor: 'transparent', color: '#666', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.8rem', clear: 'both' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <div style={{ fontWeight: '600', color: '#222', letterSpacing: '0.05em', fontSize: '0.85rem', marginBottom: '0.25rem' }}>SHASHWAT MODI</div>
                <div style={{ color: '#888', fontSize: '0.75rem', fontFamily: 'monospace' }}>STRATEGY & DATA-DRIVEN DECISIONS</div>
              </div>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="https://github.com/Shashwat-Modi/portfolio" target="_blank" rel="noreferrer" style={{ color: '#222', textDecoration: 'none', borderBottom: '1px solid #222', paddingBottom: '2px', transition: 'opacity 0.2s' }}>Repository</a>
                <span style={{ color: '#ccc' }}>|</span>
                {['guidelines', 'terms', 'privacy'].map((type) => (
                  <button key={type} onClick={() => setActiveModal(type)} style={{ background: 'none', border: 'none', padding: 0, color: '#222', borderBottom: '1px solid #222', paddingBottom: '2px', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
                <span style={{ color: '#ccc' }}>|</span>
                <a href="#contact" onClick={handleContactClick} style={{ color: '#222', textDecoration: 'none', borderBottom: '1px solid #222', paddingBottom: '2px' }}>Contact Me</a>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #eae5df', paddingTop: '1.5rem', color: '#999', fontSize: '0.7rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>© 2026. Layout frameworks open-sourced under the MIT License. Personal identity assets reserved.</div>
            </div>
          </div>

          {/* Custom Elegant Modal Overlay */}
          {activeModal && (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 }} onClick={() => setActiveModal(null)}>
              <div style={{ backgroundColor: '#f9f6f0', border: '1px solid #1a1a1a', padding: '2.5rem', maxWidth: '500px', width: '90%', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} onClick={(e) => e.stopPropagation()}>
                <h3 style={{ margin: '0 0 1rem 0', fontFamily: 'Lora, Georgia, serif', color: '#1a1a1a', fontSize: '1.25rem', borderBottom: '1px solid #1a1a1a', paddingBottom: '0.5rem' }}>{modalContent[activeModal].title}</h3>
                <p style={{ margin: 0, color: '#444', lineHeight: '1.6', fontSize: '0.85rem' }}>{modalContent[activeModal].text}</p>
                <button onClick={() => setActiveModal(null)} style={{ marginTop: '2rem', background: '#1a1a1a', color: '#f9f6f0', border: 'none', padding: '0.6rem 1.2rem', cursor: 'pointer', fontSize: '0.75rem', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Close Drawer</button>
              </div>
            </div>
          )}
        </footer>
      </div>
      <Chatbot />
    </div>
  );
}
