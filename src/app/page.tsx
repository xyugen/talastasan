import HeroAnimation from "@/components/animations/hero";
import AuthorSection from "./_components/author-section";
import DetailsSection from "./_components/details-section";
import HeroSection from "./_components/hero-section";
import ImpengNegroSection from "./_components/impeng-negro-section";
import PlayAudio from "./_components/play-audio";
import PublishedWorksSection from "./_components/published-works-section";
import { ChevronUp } from "lucide-react";

const Page = () => {
  return (
    <>
      <PlayAudio />
      <div className="relative min-h-[300vh]">
        {/* Hero section stays fixed */}
        <div className="fixed inset-0 -z-10">
          <HeroAnimation>
            <HeroSection />
          </HeroAnimation>
        </div>

        {/* Container for scrolling content */}
        <div className="relative">
          {/* Spacer to allow hero section to be fully visible initially */}
          <div className="h-screen w-full" />

          {/* Scrolling sections */}
          <div className="relative bg-background">
            <section className="py-6 absolute top-0 left-1/2 -translate-x-1/2">
              <ChevronUp className="size-8 animate-bounce" />
            </section>
            <DetailsSection />
            <AuthorSection />
            <PublishedWorksSection />
            <ImpengNegroSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
