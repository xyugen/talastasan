import BlurFade from "@/components/ui/blur-fade";
import { Quote } from "lucide-react";

const DetailsSection = () => {
  return (
    <section id="details" className="py-32">
      <div className="space-y-8 px-6 text-center md:px-20 lg:px-40">
        <BlurFade
          className="relative bg-card border-4 border-secondary rounded-lg p-8 mx-auto w-fit space-y-2"
          delay={0.5}
          inView
        >
          <Quote className="absolute fill-primary stroke-secondary left-0 translate-x-[-50%] md:-left-8 -top-4 size-8 rotate-180 text-foreground/70" />
          <h3 className="text-3xl font-semibold text-foreground">
            Buksan ang isipan, palawakin ang kaalaman.
          </h3>
        </BlurFade>

        <BlurFade
        delay={0.65}
        inView
        className="text-lg text-foreground">
          Ang TalasTasan ay isang mungkahing website na naglalaman ng mga akdang
          pampanitikan na magsisilbing isang kapaki-pakinabang na kagamitang
          pampagtuturo at pagkatuto para sa mga guro at mag-aaral upang higit
          pang malinang ang kanilang kasanayan sa pagbasa at mapalawak ang
          kanilang bokabularyo sa Filipino.
        </BlurFade>
      </div>
    </section>
  );
};

export default DetailsSection;
