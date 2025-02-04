"use client";

import StoryCard from "@/components/cards/story-card";
import BlurFade from "@/components/ui/blur-fade";
import { Story } from "@/data/stories";

interface StoriesSectionProps {
    title: string;
    stories: Story[];
    baseUrl?: string;
}

const StoriesSection = ({ title, stories, baseUrl }: StoriesSectionProps) => {
    return (
        <section id="stories" className="bg-background min-h-screen pb-4">
            <BlurFade delay={0.3} className="mb-16 text-center">
                <h2 className="text-4xl sm:text-6xl font-semibold text-foreground">
                    <span className="relative">
                        {title}
                        {/* <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 -right-2 -top-4 bottom-0 translate-y-1 stroke-primary"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                strokeWidth="3"
              />
            </svg> */}
                    </span>
                </h2>
            </BlurFade>
            <div className="mx-auto grid gap-2 px-2 w-full lg:grid-cols-3">
                {stories.map(({ title, description, image, link }, i) => (
                    <StoryCard
                        key={title}
                        title={title}
                        description={description}
                        image={image}
                        href={`${baseUrl}${link}`}
                        index={i}
                    />
                ))}
            </div>
        </section>
    );
};

export default StoriesSection;
