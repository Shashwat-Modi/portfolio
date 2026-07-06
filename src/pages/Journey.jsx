import { journeyData } from "../data/contentData";

function TimelineNode({ node, isLast }) {
  const isFoundation = node.kind === "foundation";

  return (
    <div className="relative flex gap-6 pb-20 last:pb-0 md:gap-10">
      {/* connecting line + dot */}
      <div className="relative flex w-6 flex-none flex-col items-center md:w-8">
        <span
          className={`z-10 mt-1.5 flex-none rounded-full ${
            isFoundation ? "h-3.5 w-3.5 bg-stone-300" : "h-2.5 w-2.5 bg-stone-500"
          }`}
        />
        {!isLast && <span className="mt-1 w-px flex-1 bg-gradient-to-b from-stone-700 to-stone-800/40" />}
      </div>

      {/* content */}
      <div className="flex-1 pt-0">
        <p className="font-serif text-xs uppercase tracking-[0.3em] text-stone-500 md:text-sm">
          {node.timestamp}
        </p>
        <h2
          className={`mt-3 font-serif text-zinc-100 ${
            isFoundation ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {node.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300">
          {node.description}
        </p>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-32">
      <h1 className="font-serif text-3xl text-zinc-100 sm:text-4xl md:text-5xl">Journey</h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-400">
        A timeline of the people and places that shaped how I think about data — and everything else.
      </p>

      <div className="mt-20 md:mt-28">
        {journeyData.map((node, i) => (
          <TimelineNode key={node.id} node={node} isLast={i === journeyData.length - 1} />
        ))}
      </div>
    </section>
  );
}
