"use client";

import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
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
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="logo" className="w-12" />
        <h1 className="text-lg font-bold">TalasTasan</h1>
      </Link>
      {/* <NavMenu /> */}
    </header>
  );
};

export default Header;
