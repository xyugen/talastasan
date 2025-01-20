import HeroImage from "@/assets/images/hero-image.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative flex w-full h-screen flex-col items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${HeroImage.src})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/40 to-transparent"></div>
      <div className="z-10 space-y-6 text-center">
        <h1 className="text-5xl font-bold tracking-wide">TalasTasan</h1>
        <p className="mx-auto max-w-2xl text-lg font-light">
          Paglinang ng kasanayan sa pagbasa. Pagpapalawak ng bokabularyo.
        </p>
        <a href="#details" className="mt-6 inline-block">
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
