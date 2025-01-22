"use client";

import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BlurFade from "../ui/blur-fade";

interface StoryCardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  href: string;
  index?: number;
}

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  description,
  image,
  href,
  index = 0,
}) => {
  return (
    <BlurFade
      className="group relative overflow-hidden rounded-lg border-4 border-secondary bg-white transition-transform"
      delay={0.3 * index}
      inView
    >
      <Link href={href} className="relative">
        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-all grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 duration-300"
          />
          <ArrowRight className="absolute transition-transform top-2 right-2 group-hover:-rotate-45  duration-300 text-primary-foreground size-6" />
        </div>
        <div className="bg-background text-foreground p-2 text-left">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </BlurFade>
  );
};

export default StoryCard;
