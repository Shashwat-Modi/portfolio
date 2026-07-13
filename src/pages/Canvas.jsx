import { useState } from "react";
import { canvasPageData } from "../data/contentData";
import { getApprovedCanvasEntries, submitCanvasEntry } from "../lib/canvasStore";

const initialState = { name: "", email: "", city: "", message: "", anonymous: false };

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const inputClass =
  "mt-2 w-full border border-temple-grey bg-transparent px-4 py-3 font-serif text-base font-medium text-dark-night placeholder:text-dark-night/40 focus:border-dark-night focus:outline-none";
const labelClass = "font-label text-xs font-light uppercase tracking-[0.2em] text-charcoal";
const errorClass = "mt-1.5 font-serif text-sm font-semibold text-dark-night";

export default function Canvas() {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [wall, setWall] = useState(() => getApprovedCanvasEntries());

  const handleChange = (field) => (e) => {
    const value = field === "anonymous" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0] ?? null;
    if (selected && selected.size > canvasPageData.maxAttachmentBytes) {
      setErrors((prev) => ({ ...prev, attachment: "Attachment must be 500KB or smaller." }));
      e.target.value = "";
      setFile(null);
      return;
    }
    setErrors((prev) => ({ ...prev, attachment: undefined }));
    setFile(selected);
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please share your name.";
    if (!form.email.trim() || !isValidEmail(form.email)) next.email = "Please enter a valid email address.";
    if (!form.message.trim()) next.message = "Please write a message.";
    setErrors((prev) => ({ ...prev, ...next, attachment: prev.attachment }));
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    let attachment = null;
    if (file) {
      attachment = { name: file.name, size: file.size, dataUrl: await readFileAsDataUrl(file) };
    }

    submitCanvasEntry({
      name: form.name,
      email: form.email,
      city: form.city,
      message: form.message,
      anonymous: form.anonymous,
      attachment,
    });

    setSubmitted(true);
    setForm(initialState);
    setFile(null);
    setWall(getApprovedCanvasEntries());
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-32">
      <h1 className="font-serif text-3xl text-dark-night sm:text-4xl md:text-5xl">{canvasPageData.heading}</h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-dark-night/70">{canvasPageData.message}</p>

      <form onSubmit={handleSubmit} noValidate className="mt-12 flex flex-col gap-6">
        <div>
          <label htmlFor="canvas-name" className={labelClass}>
            Name
          </label>
          <input
            id="canvas-name"
            type="text"
            value={form.name}
            onChange={handleChange("name")}
            className={inputClass}
            placeholder="Your name"
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="canvas-email" className={labelClass}>
            Email
          </label>
          <input
            id="canvas-email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            className={inputClass}
            placeholder="you@example.com"
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="canvas-city" className={labelClass}>
            Location / City <span className="normal-case tracking-normal text-dark-night/50">(optional)</span>
          </label>
          <input
            id="canvas-city"
            type="text"
            value={form.city}
            onChange={handleChange("city")}
            className={inputClass}
            placeholder="City"
          />
        </div>

        <div>
          <label htmlFor="canvas-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="canvas-message"
            rows={5}
            value={form.message}
            onChange={handleChange("message")}
            className={`${inputClass} resize-none`}
            placeholder="Leave your print…"
          />
          {errors.message && <p className={errorClass}>{errors.message}</p>}
        </div>

        <div>
          <label htmlFor="canvas-attachment" className={labelClass}>
            Attachment <span className="normal-case tracking-normal text-dark-night/50">(optional, max 500KB)</span>
          </label>
          <input
            id="canvas-attachment"
            type="file"
            onChange={handleFileChange}
            className="mt-2 block w-full font-serif text-sm font-medium text-dark-night/70"
          />
          {errors.attachment && <p className={errorClass}>{errors.attachment}</p>}
        </div>

        <label className="flex items-center gap-3 font-serif text-base font-medium text-dark-night">
          <input
            type="checkbox"
            checked={form.anonymous}
            onChange={handleChange("anonymous")}
            className="h-4 w-4 border-temple-grey accent-dark-night"
          />
          Post anonymously to public wall
        </label>

        <button
          type="submit"
          className="self-start border border-dark-night/30 px-6 py-2.5 font-serif text-base font-medium tracking-wide text-dark-night opacity-70 transition-all duration-200 hover:border-dark-night hover:bg-dark-night hover:text-snowfall hover:opacity-100"
        >
          Submit to the Canvas
        </button>

        {submitted && (
          <p className="font-serif text-sm font-medium text-dark-night">
            Thank you — your entry has been submitted for review before it joins the wall.
          </p>
        )}
      </form>

      <div className="mt-20 border-t border-temple-grey pt-12">
        <h2 className="font-serif text-xl text-dark-night sm:text-2xl">Shared Thoughts</h2>
        {wall.length === 0 ? (
          <p className="mt-4 text-base leading-relaxed text-dark-night/70">
            Looking forward to building a community here. Share your ideas above to start the dialogue!
          </p>
        ) : (
          <div className="mt-8 flex flex-col gap-8">
            {wall.map((entry) => (
              <div key={entry.id} className="border-b border-temple-grey/60 pb-8">
                <p className="font-serif text-sm uppercase tracking-[0.2em] text-charcoal">
                  {entry.displayName}
                  {entry.city ? ` · ${entry.city}` : ""}
                </p>
                <p className="mt-3 text-base leading-relaxed text-dark-night">{entry.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
