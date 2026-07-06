import { compilingPageData } from "../data/contentData";

export default function Compiling() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-serif text-3xl text-zinc-100 sm:text-4xl">{compilingPageData.heading}</h1>
      <p className="mt-6 text-base leading-relaxed text-stone-400">{compilingPageData.message}</p>
    </section>
  );
}
