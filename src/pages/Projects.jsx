import { projectsData } from "../data/contentData";

// Per-card span/offset/stagger classes for an asymmetrical, negative-space-heavy grid.
const layout = [
  "md:col-span-7 md:col-start-1",
  "md:col-span-5 md:col-start-8 md:mt-16",
  "md:col-span-4 md:col-start-1 md:mt-10",
  "md:col-span-6 md:col-start-6 md:mt-4",
  "md:col-span-6 md:col-start-1 md:mt-20",
  "md:col-span-5 md:col-start-7 md:mt-6",
  "md:col-span-6 md:col-start-4 md:mt-20",
];

function ProjectCard({ project, index, className }) {
  return (
    <article className={`flex flex-col gap-4 ${className}`}>
      <span className="font-serif text-sm text-stone-500">{String(index + 1).padStart(2, "0")}</span>
      <h2 className="font-serif text-xl text-zinc-100 sm:text-2xl">{project.title}</h2>
      <p className="text-base leading-relaxed text-zinc-300">{project.description}</p>
      {project.metric && (
        <p className="mt-1 font-serif text-sm uppercase tracking-[0.25em] text-stone-400">
          {project.metric}
        </p>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
      <h1 className="font-serif text-3xl text-zinc-100 sm:text-4xl md:text-5xl">Projects</h1>

      <div className="mt-20 grid grid-cols-1 gap-16 md:mt-28 md:grid-cols-12 md:gap-x-10 md:gap-y-0">
        {projectsData.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            className={layout[i % layout.length]}
          />
        ))}
      </div>
    </section>
  );
}
