import { DotPattern } from "@/components/patterns/dot-pattern";
import BlurFade from "@/components/ui/blur-fade";
import siteName from "@/data/site-name";
import { cn } from "@/lib/utils";

const Page = () => {
  return (
    <div className="relative px-2 max-w-4xl mx-auto">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] md:mt-36 mt-24",
          "fill-primary"
        )}
      />
      <BlurFade delay={0.3} inView>
        <h1 className="text-4xl md:text-5xl font-normal text-center mb-8 text-secondary/80">
          Tungkol sa
        </h1>
      </BlurFade>

      <BlurFade
        delay={0.4}
        inView
        className="text-center text-lg text-foreground space-y-2"
      >
        <p className="leading-relaxed">
          Ang <span className="font-semibold text-secondary">{siteName}</span>{" "}
          ay isang mungkahing website na naglalaman ng mga akdang pampanitikan
          na magsisilbing isang kapaki-pakinabang na kagamitang pampagtuturo at
          pagkatuto para sa mga guro at mag-aaral upang higit pang malinang ang
          kanilang kasanayan sa pagbasa at mapalawak ang kanilang bokabularyo sa
          Filipino.
        </p>
      </BlurFade>
    </div>
  );
};

export default Page;
