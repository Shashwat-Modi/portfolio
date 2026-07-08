import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { askGemini } from "../lib/geminiClient";

const GREETING = {
  role: "assistant",
  text: "Hi, I'm Shashwat's AI persona. Ask me about his projects, experience, or journey.",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const handleSend = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const reply = await askGemini(text);
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Something went wrong reaching Gemini. Please try again shortly." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 28, x: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, x: 28, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-temple-grey bg-dark-night shadow-2xl shadow-dark-night/30"
          >
            <div className="flex items-center justify-between border-b border-temple-grey px-5 py-4">
              <div>
                <p className="font-serif text-sm font-semibold text-snowfall">Shashwat's AI Persona</p>
                <p className="text-xs font-medium text-snowfall/70">Gemini-powered · placeholder mode</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-snowfall/70 transition-colors hover:text-snowfall"
              >
                ✕
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm font-medium leading-relaxed ${
                    m.role === "user" ? "ml-auto bg-frozen-dew text-dark-night" : "bg-snowfall/10 text-snowfall"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {loading && (
                <div className="max-w-[85%] rounded-xl bg-snowfall/10 px-3.5 py-2.5 text-sm font-medium text-snowfall/70">
                  Thinking…
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-temple-grey px-4 py-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something…"
                className="flex-1 rounded-full border border-temple-grey bg-dark-night px-4 py-2 text-sm font-medium text-snowfall placeholder:text-snowfall/50 focus:border-frozen-dew focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-full bg-frozen-dew px-4 py-2 text-sm font-semibold text-dark-night transition-opacity disabled:opacity-40"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-temple-grey bg-dark-night text-snowfall shadow-lg shadow-dark-night/30"
      >
        {open ? <span className="text-xl leading-none">✕</span> : <span className="font-serif text-lg leading-none">AI</span>}
      </motion.button>
    </div>
  );
}
