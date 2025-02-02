import { KuwentongMayLarawanCover } from "@/assets/images/stories";
import React from "react";
import StoryHeroSection from "../_components/story-hero-section";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="bg-surface-100">
            <StoryHeroSection imageCover={KuwentongMayLarawanCover.src} />
            {children}
        </section>
    );
};

export default Layout;
