import { SaLupaNgSarilingBayan } from "@/assets/images/written-works";
import HeroAnimation from "@/components/animations/hero";
import React from "react";
import LayoutSection from "../_components/layout-section";
import StoryHeroSection from "../_components/story-hero-section";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroAnimation>
      <LayoutSection>
        <StoryHeroSection
          title="Sa Lupa Ng Sariling Bayan"
          imageCover={SaLupaNgSarilingBayan.src}
        />
        {children}
      </LayoutSection>
    </HeroAnimation>
  );
};

export default Layout;
