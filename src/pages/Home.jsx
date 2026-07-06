import { homeData, siteMeta } from "../data/contentData";

export default function Home() {
  const [signOffPrefix] = homeData.signOff.split("Shashwat");

  return (
    <section className="mx-auto flex max-w-4xl flex-col px-6 py-10 md:h-[calc(100svh-4rem)] md:justify-between md:px-10 md:py-12">
      <div>
        <p className="font-serif text-xs uppercase tracking-[0.3em] text-stone-500 sm:text-sm">
          {siteMeta.role}
        </p>
        <h1 className="mt-1.5 font-serif text-2xl font-bold text-zinc-100 sm:text-3xl">
          {siteMeta.name}
        </h1>

        <div className="mt-5 flow-root sm:mt-6">
          <div className="relative float-left mr-6 mb-3 aspect-[4/5] w-32 overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 sm:w-40 md:w-44">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(214,211,209,0.12),transparent_60%)]" />
            <div className="flex h-full w-full items-center justify-center px-2">
              <span className="text-center font-serif text-[9px] uppercase tracking-[0.3em] text-stone-500">
                Photo Coming Soon
              </span>
            </div>
          </div>

          <h2 className="font-serif text-lg leading-snug text-zinc-100 sm:text-xl md:text-2xl">
            {homeData.heading}
          </h2>

          <div className="mt-4 space-y-3">
            {homeData.paragraphs.map((paragraph, i) => (
              <p key={i} className="font-sans text-sm leading-relaxed text-zinc-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 self-end text-right text-lg leading-relaxed text-stone-300 md:mt-0 md:text-xl">
        {signOffPrefix}
        <span className="font-cursive text-3xl text-stone-100 md:text-4xl">Shashwat</span>
      </p>
    </section>
  );
}
