"use client";

import Logo from "@/assets/images/logo.png";
import siteName from "@/data/site-name";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PageTransition from "../animations/page-transition";
import SoundToggle from "../sound-toggle";
import ScrollProgress from "../ui/scroll-progress";
import NavBar from "./navbar";

const Header = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { animatePageOut } = PageTransition();

  return (
    <>
      <header
        className={`fixed z-50 w-full flex items-center justify-between px-4 py-3 transition-all duration-300 md:px-8 ${
          isScrolled ? "bg-secondary shadow-lg" : "bg-transparent"
        } text-secondary-foreground`}
      >
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => {
              if (pathname !== "/") {
                animatePageOut("/");
              }
            }}
            className={`transition-colors hover:bg-accent flex items-center gap-2 px-4 h-10 rounded-full bg-accent/70 text-accent-foreground border border-primary/20 ${
              !isScrolled && "shadow-md"
            }`}
          >
            <Image src={Logo} alt="logo" className="w-10" />
            <h1 className="text-base font-semibold">{siteName}</h1>
          </button>
          <SoundToggle />
        </div>

        <NavBar />
      </header>
      <ScrollProgress className="h-1 top-16 z-30" />
    </>
  );
};

export default Header;
