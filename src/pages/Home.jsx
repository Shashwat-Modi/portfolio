import { homeData, siteMeta } from "../data/contentData";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col-reverse gap-16 px-6 py-16 md:flex-row md:items-start md:gap-12 md:px-10 md:py-28">
      {/* Left column — the letter */}
      <div className="flex-1 md:pt-6">
        <p className="mb-6 font-serif text-sm uppercase tracking-[0.3em] text-stone-500">
          {siteMeta.role}
        </p>
        <h1 className="max-w-xl font-serif text-3xl leading-tight text-zinc-100 sm:text-4xl md:text-5xl">
          {homeData.heading}
        </h1>

        <div className="mt-10 max-w-xl space-y-6">
          {homeData.paragraphs.map((paragraph, i) => (
            <p key={i} className="font-sans text-base leading-relaxed text-zinc-300">
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-14 font-cursive text-4xl text-stone-300 md:text-5xl">
          {homeData.signOff}
        </p>
      </div>

      {/* Right column — dynamic photo placeholder */}
      <div className="flex flex-1 items-start justify-center md:justify-end">
        <div className="relative aspect-[4/5] w-full max-w-sm">
          <div className="absolute -inset-3 border border-stone-700/40" />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(214,211,209,0.12),transparent_60%)]" />
            <span className="font-serif text-sm uppercase tracking-[0.35em] text-stone-500">
              Photo Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
