import { cn } from "@/lib/utils";

const StoryHeroSection = ({
  imageCover,
  title,
  className,
}: {
  imageCover: string;
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-96 flex-col items-center justify-center bg-cover bg-no-repeat text-surface-100",
        className
      )}
      style={{
        backgroundImage: `url(${imageCover})`,
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-stone-800/70 via-stone-800/55 to-stone-800/40"></div>
      <div className="z-10 space-y-4 text-center text-secondary-foreground">
        <h1 className="text-5xl md:text-7xl font-medium">{title}</h1>
        <p>Ni Rogelio Sikat</p>
      </div>
    </div>
  );
};

export default StoryHeroSection;
