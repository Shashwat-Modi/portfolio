import { homeData } from "../data/contentData";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width silhouette watermark backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-silhouette.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-snowfall/20" aria-hidden="true" />
      {/* Extra scrim behind the letter text so it stays legible over the portrait */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-snowfall via-snowfall/80 to-transparent md:via-45% md:to-70%"
        aria-hidden="true"
      />

      <div className="relative flex flex-col justify-center px-6 py-10 md:h-[calc(100svh-6.5rem)] md:px-10 md:py-12">
        <div className="mr-auto max-w-xl pl-8 md:pl-16">
          <h2 className="font-serif text-xl font-semibold leading-snug text-dark-night sm:text-2xl md:text-3xl">
            {homeData.heading}
          </h2>

          <div className="mt-5 space-y-3">
            {homeData.paragraphs.map((paragraph, i) => (
              <p key={i} className="font-serif text-base leading-relaxed text-dark-night/80">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-8 font-serif text-lg leading-relaxed text-dark-night/80 md:text-xl">
            {homeData.signOffLine}
          </p>
          <p className="mt-4 font-signature text-4xl leading-none text-dark-night md:mt-6 md:text-5xl">
            {homeData.signatureName}
          </p>
        </div>
      </div>
    </section>
  );
}
