import { BuongKuwentoCover } from "@/assets/images/stories";
import storiesContents from "@/data/stories-contents";
import { BookOpen } from "lucide-react";
import { Metadata } from "next";
import StoryHeroSection from "../_components/story-hero-section";

export const metadata: Metadata = {
  title: "Buong Kuwento",
};

const Page = () => {
  return (
    <>
      <StoryHeroSection imageCover={BuongKuwentoCover.src} />

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
              <div key={chapter.title} className="group relative">
                <a
                  href={`/buong-kuwento${chapter.link}`}
                  className="block overflow-hidden rounded-xl border border-primary/10 bg-white p-6 shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-primary">
                      {chapter.title}
                    </h3>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <BookOpen className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="text-surface-content/80 line-clamp-3">
                    {chapter.content}
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-sm text-primary/80">Basahin →</span>
                    <div className="h-[2px] w-0 bg-primary/30" />
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 h-12 w-12 overflow-hidden">
                    <div className="absolute bottom-0 right-0 h-4 w-4 translate-x-2 translate-y-2 rotate-45 bg-primary/5" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-4 bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        </div>
      </section>
    </>
  );
};

export default Page;
