import { BuongKuwentoCover } from "@/assets/images/stories";
import React from "react";
import StoryHeroSection from "../_components/story-hero-section";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StoryHeroSection imageCover={BuongKuwentoCover.src} />

      {children}
    </>
  );
};

export default Layout;
