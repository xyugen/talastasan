"use client";

import PublishedWorkCard from "@/components/cards/published-work-card";
import publishedWorks from "@/data/published-works";
import { useState } from "react";
import StoriesSection from "./stories-section";
import { emptyStories, impengNegroStories } from "@/data/stories";
import { PageRoutes } from "@/constants/page-routes";

const publishedWorksStories = [
  {
    title: "Impeng Negro",
    stories: impengNegroStories,
    baseUrl: PageRoutes.IMPENG_NEGRO,
  },
  {
    title: "Tata Selo",
    stories: emptyStories,
    baseUrl: PageRoutes.TATA_SELO,
  },
  {
    title: "Pagsalunga",
    stories: emptyStories,
    baseUrl: PageRoutes.PAGSALUNGA,
  },

  {
    title: "Dugo sa Bukang Liwayway",
    stories: emptyStories,
    baseUrl: PageRoutes.DUGO_SA_BUKANG_LIWAYWAY,
  },
];


type PublishedWorksStory = (typeof publishedWorksStories)[number];

const PublishedWorksSection = () => {
  const [currentStories, setCurrentStories] =
    useState<PublishedWorksStory | null>(null);

  const cards = publishedWorks.map((work, index) => ({
    url: work.src.src,
    title: work.title,
    id: index,
    alt: work.alt,
  }));

  const handleCardClick = (index: number) => {
    setCurrentStories(publishedWorksStories[index]);
    // set delay to 1.5 seconds
    setTimeout(() => {
      // scroll to #stories
      const element = document.getElementById("stories");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 250);
  };

  return (
    <>
      <section className="bg-background py-12 text-foreground">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-6xl font-bold">Nailathalang Akda</h2>
        </div>
        {/* <div className="flex flex-col gap-2 p-8 items-center justify-center">
                    <span className="font-semibold uppercase">
                        Mag-scroll pababa
                    </span>
                    <ArrowDownFromLine className="size-4 animate-bounce" />
                </div> */}
        <div className="flex flex-col items-center space-y-4 w-full">
          <div className="mx-auto w-full">
            <section className="relative px-4 py-12 bg-primary/10 flex flex-row flex-wrap justify-center items-center gap-4">
              {cards.length > 0 &&
                cards.map((card, i) => (
                  <PublishedWorkCard
                    key={card.id}
                    card={card}
                    index={i}
                    onClick={(i) => handleCardClick(i)}
                  />
                ))}
            </section>
            {/* <HorizontalScrollCarousel cards={cards} /> */}
          </div>
        </div>
      </section>
      {currentStories && (
        <StoriesSection
          title={currentStories.title}
          stories={currentStories.stories}
          baseUrl={currentStories.baseUrl}
        />
      )}
    </>
  );
};

export default PublishedWorksSection;
