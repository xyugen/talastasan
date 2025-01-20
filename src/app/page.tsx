import HeroAnimation from "@/components/animations/hero";
import AnimateScrollContainer from "./_components/animate-scroll-container";
import AuthorSection from "./_components/author-section";
import DetailsSection from "./_components/details-section";
import HeroSection from "./_components/hero-section";
import ImpengNegroSection from "./_components/impeng-negro-section";
import PublishedWorksSection from "./_components/published-works-section";

const Page = () => {
  return (
    <div className="relative min-h-[300vh]">
      {/* Hero section stays fixed */}
      <div className="fixed inset-0 z-0">
        <HeroAnimation>
          <HeroSection />
        </HeroAnimation>
      </div>

      {/* Container for scrolling content */}
      <div className="relative z-10">
        {/* Spacer to allow hero section to be fully visible initially */}
        <div className="h-screen w-full" />

        {/* Scrolling sections */}
        <div className="relative bg-background">
          <AnimateScrollContainer>
            <DetailsSection />
            <AuthorSection />
            <PublishedWorksSection />
            <ImpengNegroSection />
          </AnimateScrollContainer>
        </div>
      </div>
    </div>
  );
};

export default Page;
