import HeroImage from "@/assets/images/hero-image.jpg";
import ParallaxHeroBG from "@/components/parallax-hero-bg";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const _heroText = "TalasTasan";

const _descriptionText =
  "Paglinang ng kasanayan sa pagbasa. Pagpapalawak ng bokabularyo.";

const HeroSection = () => {
  return (
    <section
      className="relative flex w-full h-screen flex-col items-center justify-center overflow-hidden text-primary-foreground"
      style={{ backgroundImage: `url(${HeroImage.src})` }}
    >
      {/* Background with parallax */}
      <ParallaxHeroBG />

      {/*  Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-800/70 via-stone-800/50 to-stone-800/10 h-full"></div>

      {/*  Content */}
      <div className="z-10 space-y-6 text-center">
        <h1 id="hero-text" className="text-5xl font-bold tracking-wide">
          <span>{_heroText}</span>
        </h1>
        <h2 id="description" className="mx-auto max-w-2xl text-lg font-light">
          <span>{_descriptionText}</span>
        </h2>
      </div>

      <Link
        href="#details"
        className="blur-item absolute bottom-8 inline-block"
      >
        <ChevronDown className="size-8 animate-bounce" />
      </Link>
    </section>
  );
};

export default HeroSection;
