import BlurFade from "@/components/ui/blur-fade";
import { Quote } from "lucide-react";

const DetailsSection = () => {
  return (
    <section
      id="tungkol-sa"
      className="flex justify-center items-center py-20 min-h-[45vh]"
    >
      <div className="relative space-y-8 px-6 text-center md:px-20 lg:px-40">
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
      </div>
    </section>
  );
};

export default DetailsSection;
