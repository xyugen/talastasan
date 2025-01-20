import { BuodCover } from "@/assets/images/stories";
import HeroAnimation from "@/components/animations/hero";
import React from "react";
import StoryHeroSection from "../_components/story-hero-section";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroAnimation>
      <StoryHeroSection imageCover={BuodCover.src} />

      {children}
    </HeroAnimation>
  );
};

export default Layout;
