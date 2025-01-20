import storiesContents from "@/data/stories-contents";
import { Metadata } from "next";
import ChapterButton from "./_components/chapter-button";

export const metadata: Metadata = {
  title: "Buong Kuwento",
};

const Page = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-primary/5 px-4 py-16 text-surface-content md:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Buong Kuwento
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-surface-content/80">
            Piliin ang pahina upang simulan ang iyong pagbabasa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {storiesContents.map((chapter) => (
            <ChapterButton key={chapter.link} chapter={chapter} />
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-4 bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
};

export default Page;
