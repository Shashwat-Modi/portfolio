import { projectsData } from "../data/contentData";

function ProjectRow({ project, index }) {
  const reversed = index % 2 === 1;

  return (
    <article
      className={`flex flex-col md:min-h-[26rem] ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className="relative h-64 w-full overflow-hidden md:h-auto md:w-[60%]">
        <img
          src={project.image}
          alt={`${project.title} — abstract technology and data architecture`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex w-full items-center bg-frozen-dew md:w-[40%]">
        <div className="border-4 border-white p-8 md:p-10">
          <span className="font-serif text-sm text-dark-night/60">{String(index + 1).padStart(2, "0")}</span>
          <h2 className="mt-4 font-serif text-xl text-dark-night sm:text-2xl">{project.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-dark-night/80">{project.description}</p>
          {project.metric && (
            <p className="mt-4 font-serif text-sm uppercase tracking-[0.25em] text-roasted-cashew">
              {project.metric}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
      <h1 className="font-serif text-3xl text-dark-night sm:text-4xl md:text-5xl">Projects</h1>

      <div className="mt-20 flex flex-col gap-16 md:mt-28 md:gap-20">
        {projectsData.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
