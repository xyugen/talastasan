import HeroAnimation from "@/components/animations/hero";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex justify-center items-center min-h-[90vh]">
      <div className="fixed top-0 h-16 w-full bg-secondary" />
      <HeroAnimation>{children}</HeroAnimation>
    </div>
  );
};

export default Layout;