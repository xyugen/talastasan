import HeroAnimation from "@/components/animations/hero";
import AuthorSection from "./_components/author-section";
import DetailsSection from "./_components/details-section";
import HeroSection from "./_components/hero-section";
import ImpengNegroSection from "./_components/impeng-negro-section";
import PublishedWorksSection from "./_components/published-works-section";

const Page = () => {
  return (
    <>
      <HeroAnimation>
        <HeroSection />
      </HeroAnimation>
      <DetailsSection />
      <AuthorSection />
      <PublishedWorksSection />
      <ImpengNegroSection />
    </>
  );
};

export default Page;
