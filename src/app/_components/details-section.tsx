import { DotPattern } from "@/components/patterns/dot-pattern";
import BlurFade from "@/components/ui/blur-fade";
import siteName from "@/data/site-name";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

const DetailsSection = () => {
  return (
    <section id="tungkol-sa" className="flex justify-center items-center py-20 min-h-[80vh]">
      <div className="relative space-y-8 px-6 text-center md:px-20 lg:px-40">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] md:mt-36 mt-24",
            "fill-primary"
          )}
        />
        <BlurFade delay={0.2} inView>
          <h2 className="text-3xl font-semibold leading-relaxed tracking-wide">
            Tungkol sa
          </h2>
        </BlurFade>
        <BlurFade
          className="relative bg-card border-4 border-secondary rounded-lg p-6 mx-auto w-fit space-y-2"
          delay={0.3}
          inView
        >
          <Quote className="absolute fill-primary stroke-secondary left-0 translate-x-[-50%] -top-4 size-8 rotate-180 text-foreground/70" />
          <h3 className="font-lora text-3xl font-semibold text-foreground">
            Buksan ang isipan, palawakin ang kaalaman.
          </h3>
        </BlurFade>

        <BlurFade
          delay={0.4}
          inView
          className="text-lg text-foreground space-y-2"
        >
          <p className="leading-relaxed">
            Ang <span className="font-semibold text-secondary">{siteName}</span>{" "}
            ay isang mungkahing website na naglalaman ng mga akdang pampanitikan
            na magsisilbing isang kapaki-pakinabang na kagamitang pampagtuturo
            at pagkatuto para sa mga guro at mag-aaral upang higit pang malinang
            ang kanilang kasanayan sa pagbasa at mapalawak ang kanilang
            bokabularyo sa Filipino.
          </p>
        </BlurFade>
      </div>
    </section>
  );
};

export default DetailsSection;
