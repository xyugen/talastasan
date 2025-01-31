"use client";

import HorizontalScrollCarousel from "@/components/carousel/horizontal-scroll-carousel";
import publishedWorks from "@/data/published-works";
import { ArrowDownFromLine } from "lucide-react";

const PublishedWorksSection = () => {
  const cards = publishedWorks.map((work, index) => ({
    url: work.src.src,
    title: work.title,
    id: index,
  }));
  return (
    <section className="bg-background py-12 text-foreground">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold">
          Nailathalang Akda
        </h2>
      </div>
      <div className="flex flex-col gap-2 p-8 items-center justify-center">
        <span className="font-semibold uppercase">Mag-scroll pababa</span>
        <ArrowDownFromLine className="size-4 animate-bounce" />
      </div>
      <div className="flex flex-col items-center space-y-4 w-full">
        <div className="mx-auto w-full">
          <HorizontalScrollCarousel cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default PublishedWorksSection;
