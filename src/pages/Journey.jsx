import { motion } from "framer-motion";
import { journeyData } from "../data/contentData";

const tierTitleClass = {
  primary: "text-3xl font-bold sm:text-4xl md:text-5xl",
  secondary: "text-xl font-semibold sm:text-2xl md:text-3xl",
  tertiary: "text-lg font-normal sm:text-xl",
};

const tierDotClass = {
  primary: "h-3.5 w-3.5 bg-stone-200",
  secondary: "h-3 w-3 bg-stone-400",
  tertiary: "h-2.5 w-2.5 bg-stone-600",
};

function TimelineNode({ node }) {
  return (
    <motion.div
      className="relative pb-32 last:pb-0 md:pb-40"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span
        className={`absolute -left-10 top-1.5 -translate-x-1/2 rounded-full ring-4 ring-zinc-900 md:-left-14 ${tierDotClass[node.tier]}`}
      />

      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="font-serif text-xs uppercase tracking-[0.3em] text-stone-500 md:text-sm">
          {node.date}
        </p>
        <h2 className={`mt-3 font-serif text-zinc-100 ${tierTitleClass[node.tier]}`}>
          {node.title}
        </h2>
        <p className="mt-1.5 text-sm uppercase tracking-[0.2em] text-stone-500">
          {node.byline}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300">
          {node.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Journey() {
  const orderedJourney = [...journeyData].reverse();

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-32">
      <h1 className="font-serif text-3xl text-zinc-100 sm:text-4xl md:text-5xl">Journey</h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-400">
        A timeline of the people and places that shaped how I think about data — and everything else.
      </p>

      <div className="relative mt-24 border-l border-stone-700/50 pl-10 md:mt-32 md:pl-14">
        {orderedJourney.map((node) => (
          <TimelineNode key={`${node.title}-${node.date}`} node={node} />
        ))}
      </div>
    </section>
  );
}
