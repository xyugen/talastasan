"use client";

import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import NavMenu from "@/components/nav-menu";

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
      className="fixed z-50 flex w-full flex-row items-center justify-between bg-secondary px-4 py-3 text-primary-content transition-all duration-150 md:px-8"
      style={{
        backgroundColor: `rgba(var(--tw-bg-opacity, 0), ${isScrolled ? 1 : 0})`,
      }}
    >
      <Link href="/" className="flex w-fit flex-row items-center gap-2">
        <Image src={Logo} alt="logo" className="w-12" />
        <h1 className="text-lg font-bold">TalasTasan</h1>
      </Link>
      {/* <NavMenu /> */}
    </header>
  );
};

export default Header;
