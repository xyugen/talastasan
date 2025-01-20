"use client";

import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavBar from "./navbar";

const Header = () => {
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

  return (
    <header
      className={`fixed z-50 w-full flex items-center justify-between px-4 py-3 transition-all duration-300 md:px-8 ${
        isScrolled ? "bg-secondary shadow-lg" : "bg-transparent"
      } text-secondary-foreground`}
    >
      <Link
        href="/"
        className={`transition-colors hover:bg-accent flex items-center gap-2 px-4 h-10 rounded-full bg-accent/70 text-accent-foreground border border-primary/20 ${
          !isScrolled && "shadow-md"
        }`}
      >
        <Image src={Logo} alt="logo" className="w-10" />
        <h1 className="text-base font-semibold">TalasTasan</h1>
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
