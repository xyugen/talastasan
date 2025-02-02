import HeroAnimation from "@/components/animations/hero";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <HeroAnimation>
            <div>{children}</div>
        </HeroAnimation>
    );
};

export default Layout;
