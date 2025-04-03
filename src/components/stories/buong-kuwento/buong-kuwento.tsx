import { Metadata } from "next";
import { ComponentType, useState } from "react";
import ChapterButton from "./_components/chapter-button";
import NavButtons from "./_components/nav-buttons";
import PaginatedChapterReader from "./_components/paginated-chapter-reader";
import StoryChapter from "@/interface/StoryChapter";

export const metadata: Metadata = {
  title: "Buong Kuwento",
};

const BuongKuwento = ({
  storiesContents,
  lastPage: LastPage
}: {
  storiesContents: StoryChapter[];
  lastPage?: ComponentType;
}) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(-1);

  const storyChapter = storiesContents[activeChapterIndex];
  const nextChapter = storiesContents[activeChapterIndex + 1] || null;
  const previousChapter = storiesContents[activeChapterIndex - 1] || null;

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-primary/5 px-4 py-6 text-surface-content md:px-8">
      {activeChapterIndex >= 0 ? (
        <div className="container mx-auto space-y-12 px-2 md:px-[10%]">
          <div className="space-y-4">
            <h3 className="text-2xl text-center font-bold text-secondary">
              {storyChapter.title}
            </h3>

            <PaginatedChapterReader
              content={storyChapter.content}
              isLastPage={!nextChapter}
              lastPage={LastPage}
            />
          </div>

          <div className="w-full border-t border-secondary/20" />

          <NavButtons
            prev={previousChapter}
            next={nextChapter}
            onHomeClick={() => setActiveChapterIndex(-1)}
            onPrevClick={() => setActiveChapterIndex(activeChapterIndex - 1)}
            onNextClick={() => setActiveChapterIndex(activeChapterIndex + 1)}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="mx-auto max-w-2xl text-lg text-surface-content/80">
            Piliin ang pahina upang simulan ang iyong pagbabasa
          </p>

          <div className="lg:w-3/4 grid gap-6 md:grid-cols-2">
            {storiesContents.map((chapter, i) => (
              <ChapterButton
                key={chapter.link}
                chapter={chapter}
                onClick={() => {
                  setActiveChapterIndex(i);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default BuongKuwento;
