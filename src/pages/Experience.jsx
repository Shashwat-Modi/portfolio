import { experienceData } from "../data/contentData";

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
      <h1 className="font-serif text-3xl text-zinc-100 sm:text-4xl md:text-5xl">Experience</h1>

      <div className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-36">
        {experienceData.map((role, i) => (
          <article
            key={role.id}
            className={`flex flex-col gap-4 md:w-3/4 ${
              i % 2 === 1 ? "md:ml-auto md:items-end md:text-right" : "md:items-start md:text-left"
            }`}
          >
            <span className="font-serif text-6xl text-zinc-800 sm:text-7xl md:text-8xl">
              {String(i + 1).padStart(2, "0")}
            </span>

            <p className="font-serif text-sm uppercase tracking-[0.3em] text-stone-500">
              {role.timestamp}
            </p>

            <h2 className="font-serif text-2xl text-zinc-100 sm:text-3xl">{role.role}</h2>
            <p className="text-base text-stone-400">{role.org}</p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300 md:max-w-lg">
              {role.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
