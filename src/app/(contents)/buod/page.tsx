import React from "react";
import ChapterReader from "../_components/chapter-reader";
import PageTitle from "../_components/page-title";
import shortenedStory from "@/data/shortened-story";

const Page = () => {
  return (
    <section className="bg-surface-100">
      <PageTitle title="Buod" />
      <div className="container mx-auto space-y-12 px-2 py-4 md:px-[10%]">
        <ChapterReader>
          <p className="whitespace-pre-wrap">{shortenedStory}</p>
        </ChapterReader>
      </div>
    </section>
  );
};

export default Page;
