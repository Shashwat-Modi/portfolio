import { projectsData } from "../data/contentData";

function ProjectCard({ project, index }) {
  return (
    <article className="mb-8 break-inside-avoid border border-zinc-800/70 p-8 transition-colors duration-200 hover:border-stone-600/70">
      <span className="font-serif text-sm text-stone-600">{String(index + 1).padStart(2, "0")}</span>
      <h2 className="mt-4 font-serif text-xl text-zinc-100 sm:text-2xl">{project.title}</h2>
      <p className="mt-4 text-base leading-relaxed text-zinc-300">{project.description}</p>
      {project.metric && (
        <p className="mt-4 font-serif text-sm uppercase tracking-[0.25em] text-stone-400">
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

      <div className="mt-20 columns-1 gap-8 md:mt-28 md:columns-2 md:gap-10 lg:columns-3">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
