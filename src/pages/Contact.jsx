import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactPageData } from "../data/contentData";

const initialState = { name: "", email: "", subject: "", message: "" };

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const inputClass =
  "mt-2 w-full border border-temple-grey bg-transparent px-4 py-3 font-serif text-base font-medium text-dark-night placeholder:text-dark-night/40 focus:border-dark-night focus:outline-none";
const labelClass = "font-label text-xs font-light uppercase tracking-[0.2em] text-charcoal";
const errorClass = "mt-1.5 font-serif text-sm font-semibold text-dark-night";

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please share your name.";
    if (!form.email.trim() || !isValidEmail(form.email)) next.email = "Please enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Please add a subject.";
    if (!form.message.trim()) next.message = "Please write a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formParams = {
      from_name: e.target.name.value,
      reply_to: e.target.email.value,
      message: `Subject: ${e.target.subject.value}\n\n${e.target.message.value}`,
    };

    emailjs
      .send("service_bhq3gab", "template_gx1o1rp", formParams, "3sxZjr28bc4h2uxaF")
      .then(() => {
        alert("Message successfully routed to Shashwat! Talk soon.");
        e.target.reset();
        setSent(true);
        setForm(initialState);
      })
      .catch((err) => console.error("EmailJS Pipeline Interruption:", err));
  };

  return (
    <section className="mx-auto max-w-2xl px-6 py-20 md:px-10 md:py-32">
      <h1 className="font-serif text-3xl text-dark-night sm:text-4xl md:text-5xl">{contactPageData.heading}</h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-dark-night/70">{contactPageData.message}</p>

      <form onSubmit={handleSubmit} noValidate className="mt-12 flex flex-col gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange("name")}
            className={inputClass}
            placeholder="Your name"
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            className={inputClass}
            placeholder="you@example.com"
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange("subject")}
            className={inputClass}
            placeholder="What's this about?"
          />
          {errors.subject && <p className={errorClass}>{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange("message")}
            className={`${inputClass} resize-none`}
            placeholder="Write your message…"
          />
          {errors.message && <p className={errorClass}>{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="self-start border border-dark-night/30 px-6 py-2.5 font-serif text-base font-medium tracking-wide text-dark-night opacity-70 transition-all duration-200 hover:border-dark-night hover:bg-dark-night hover:text-snowfall hover:opacity-100"
        >
          Send Message
        </button>

        {sent && (
          <p className="font-serif text-sm font-medium text-dark-night">
            Your message has been sent — thank you for reaching out.
          </p>
        )}
      </form>
    </section>
  );
}
