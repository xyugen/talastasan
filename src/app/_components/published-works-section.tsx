"use client";

import EmblaCarousel from "@/components/carousel/embla-carousel";
import publishedWorks from "@/data/published-works";
import { useState } from "react";

const PublishedWorksSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(
    publishedWorks.length > 0 ? 0 : null
  );

  return (
    <section className="bg-background py-32">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-foreground">
          Nailathalang Akda
        </h2>
      </div>
      <div className="flex flex-col items-center space-y-4 w-full">
        <div className="container mx-auto w-fit px-6">
          <EmblaCarousel
            images={publishedWorks.map((work) => work.src)}
            onChangeAction={(index) => setCurrentIndex(index)}
          />
        </div>

        {currentIndex !== null && (
          <div className="mt-2 min-h-10 rounded-lg bg-primary p-4 text-center text-lg font-medium text-primary-content shadow-md">
            {publishedWorks[currentIndex].alt}
          </div>
        )}
      </div>
    </section>
  );
};

export default PublishedWorksSection;
