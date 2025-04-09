import { TataSeloCover } from "@/assets/images/covers";
import HeroAnimation from "@/components/animations/hero";
import React from "react";
import LayoutSection from "../_components/layout-section";
import StoryHeroSection from "../_components/story-hero-section";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <HeroAnimation>
            <LayoutSection>
                <StoryHeroSection
                    title="Tata Selo"
                    imageCover={TataSeloCover.src}
                    className="bg-center md:bg-[center_top_-4rem] lg:bg-[center_top_-8rem]"
                />
                {children}
            </LayoutSection>
        </HeroAnimation>
    );
};

export default Layout;
