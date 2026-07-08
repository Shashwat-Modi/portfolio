import { libraryPageData } from "../data/contentData";

export default function Library() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-serif text-xs uppercase tracking-[0.3em] text-charcoal">
        Under editorial review
      </p>
      <h1 className="mt-3 font-serif text-3xl text-dark-night sm:text-4xl">{libraryPageData.heading}</h1>
      <p className="mt-6 text-base leading-relaxed text-dark-night/70">{libraryPageData.message}</p>

      <div className="mt-12 grid w-full grid-cols-1 gap-4 border-t border-temple-grey pt-10 sm:grid-cols-3">
        {libraryPageData.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col items-center gap-1.5">
            <span className="font-oldstyle-nums font-serif text-3xl font-bold text-dark-night">{metric.value}</span>
            <span className="font-label text-xs font-light uppercase tracking-[0.2em] text-charcoal">{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
