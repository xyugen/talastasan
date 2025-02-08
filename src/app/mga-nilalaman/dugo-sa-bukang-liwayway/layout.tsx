import { DugoSaBukangLiwayway } from "@/assets/images/written-works";
import HeroAnimation from "@/components/animations/hero";
import React from "react";
import StoryHeroSection from "../_components/story-hero-section";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <HeroAnimation>
            <section className="bg-surface-100">
                <StoryHeroSection title="Dugo Sa Bukang Liwayway" imageCover={DugoSaBukangLiwayway.src} />
                {children}
            </section>
        </HeroAnimation>
    );

};

export default Layout;
