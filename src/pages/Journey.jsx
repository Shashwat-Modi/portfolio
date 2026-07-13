import { useState } from "react";
import { motion } from "framer-motion";
import posthog from "posthog-js";
import { journeyData, siteMeta } from "../data/contentData";

const tierTitleClass = {
  primary: "text-3xl font-bold sm:text-4xl md:text-5xl",
  secondary: "text-xl font-bold sm:text-2xl md:text-3xl",
  tertiary: "text-lg font-semibold sm:text-xl",
};

function getInitials(title) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function LogoBadge({ title, logoFile }) {
  const [errored, setErrored] = useState(false);
  const showPlaceholder = !logoFile || errored;

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-temple-grey bg-white p-1 shadow-sm">
      {showPlaceholder ? (
        <span className="font-serif text-xs font-semibold tracking-wide text-dark-night">
          {getInitials(title)}
        </span>
      ) : (
        <img
          src={`/logos/${logoFile}`}
          alt=""
          onError={() => setErrored(true)}
          className="h-full w-full rounded-full object-contain"
        />
      )}
    </div>
  );
}

function TimelineRow({ node }) {
  return (
    <motion.div
      className="grid grid-cols-[3rem_2rem_1fr] items-start md:grid-cols-[3rem_2.5rem_1fr]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Column 1: fixed logo box */}
      <div className="flex justify-center">
        <LogoBadge title={node.title} logoFile={node.logoFile} />
      </div>

      {/* Column 2: continuous line rendered as a page-spanning overlay lives outside this row */}
      <div aria-hidden="true" />

      {/* Column 3: entry details */}
      <div className="pb-4">
        <p className="font-oldstyle-nums font-serif text-xs font-bold uppercase tracking-[0.3em] text-charcoal md:text-sm">
          {node.date}
        </p>
        <h2 className={`mt-3 font-serif text-dark-night ${tierTitleClass[node.tier]}`}>
          {node.title}
        </h2>
        <p className="mt-1.5 mb-5 text-sm uppercase tracking-[0.2em] text-charcoal">
          {node.byline}
        </p>
        {node.achievements && node.achievements.length > 0 && (
          <ul className="list-disc pl-5 my-4 space-y-2 text-[#595450]/90">
            {node.achievements.map((bullet, idx) => (
              <li key={idx} className="tracking-normal text-base md:text-lg font-normal leading-relaxed">{bullet}</li>
            ))}
          </ul>
        )}
        {Array.isArray(node.description) ? (
          <div className="space-y-4">
            {node.description.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-[#595450]/90 text-base md:text-lg font-normal leading-relaxed text-justify">{paragraph}</p>
            ))}
          </div>
        ) : (
          <p className="text-[#595450]/90 text-base md:text-lg font-normal leading-relaxed text-justify">{node.description}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function Journey() {
  // journeyData is already authored newest-first (Cornell at top, The
  // Beginning at the base) — clone without reversing so it isn't mutated
  // and renders in that same reverse-chronological order.
  const orderedJourney = [...journeyData];

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-32">
      <h1 className="font-serif text-3xl text-dark-night sm:text-4xl md:text-5xl">Journey</h1>
      <a
        href={siteMeta.resumeHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block font-serif text-sm font-medium text-dark-night underline decoration-dark-night/40 underline-offset-4 transition-colors duration-200 hover:decoration-dark-night"
        onClick={() => posthog.capture("journey_resume_clicked")}
      >
        Download Resume
      </a>
      <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-dark-night/70 md:text-lg">
        A timeline of the people and places that shaped how I think about data — and everything else.
      </p>

      <div className="relative mt-24 md:mt-32">
        {/* Continuous, unbroken center line spanning the full timeline height */}
        <div
          aria-hidden="true"
          className="absolute left-[4rem] top-0 bottom-0 w-px bg-temple-grey md:left-[4.25rem]"
        />
        <div className="flex flex-col gap-14 md:gap-16">
          {orderedJourney.map((node) => (
            <TimelineRow key={`${node.title}-${node.date}`} node={node} />
          ))}
        </div>
      </div>
    </section>
  );
}
