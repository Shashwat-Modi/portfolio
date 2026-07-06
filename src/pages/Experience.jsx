import { experienceData } from "../data/contentData";

function ExperienceCard({ role, index }) {
  return (
    <article className="mb-8 break-inside-avoid border border-zinc-800/70 p-8 transition-colors duration-200 hover:border-stone-600/70">
      <span className="font-serif text-sm text-stone-600">{String(index + 1).padStart(2, "0")}</span>
      <p className="mt-4 font-serif text-xs uppercase tracking-[0.3em] text-stone-500">{role.timestamp}</p>
      <h2 className="mt-3 font-serif text-2xl text-zinc-100 sm:text-3xl">{role.role}</h2>
      <p className="mt-1 text-base text-stone-400">{role.org}</p>
      <p className="mt-4 text-base leading-relaxed text-zinc-300">{role.description}</p>
    </article>
  );
}

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
      <h1 className="font-serif text-3xl text-zinc-100 sm:text-4xl md:text-5xl">Experience</h1>

      <div className="mt-20 columns-1 gap-8 md:mt-28 md:columns-2 md:gap-10">
        {experienceData.map((role, i) => (
          <ExperienceCard key={role.id} role={role} index={i} />
        ))}
      </div>
    </section>
  );
}
