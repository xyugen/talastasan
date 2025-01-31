"use client";

import BlurFade from "@/components/ui/blur-fade";
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
        <h2 className="text-4xl font-bold">Nailathalang Akda</h2>
      </div>
      <div className="flex flex-col gap-2 p-8 items-center justify-center">
        <span className="font-semibold uppercase">Mag-scroll pababa</span>
        <ArrowDownFromLine className="size-4 animate-bounce" />
      </div>
      <div className="flex flex-col items-center space-y-4 w-full">
        <div className="mx-auto w-full">
          <section className="relative px-4 py-12 bg-primary/10 flex flex-row flex-wrap justify-center items-center gap-4">
            {cards.length > 0 &&
              cards.map((card, i) => (
                <div key={card.id} className="flex justify-center items-center">
                  <BlurFade
                    className="relative h-[400px] w-[250px] md:h-[425px] md:w-[275px] overflow-hidden bg-neutral-200 rounded-lg shadow-lg border-4 border-secondary p-2"
                    delay={0.3 * i}
                    inView
                  >
                    <div
                      style={{
                        backgroundImage: `url(${card.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="absolute inset-0 z-0 transition-transform duration-300"
                    ></div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center items-center">
                      <p className="bg-gradient-to-br bg-secondary/80 p-2 w-fit text-center text-secondary-foreground rounded">
                        {card.title}
                      </p>
                    </div>
                  </BlurFade>
                </div>
              ))}
          </section>
          {/* <HorizontalScrollCarousel cards={cards} /> */}
        </div>
      </div>
    </section>
  );
};

export default PublishedWorksSection;
