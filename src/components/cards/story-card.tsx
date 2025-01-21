"use client";

import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface StoryCardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  href: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  description,
  image,
  href,
}) => {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-lg border-4 border-secondary bg-white transition-transform"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-all grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 duration-300"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent p-2 rounded-l-sm text-left">
          <h3 className="mb-3 text-xl font-semibold text-primary-foreground">
            {title}
          </h3>
          <p className="text-primary-foreground">{description}</p>
        </div>
        <ArrowRight className="absolute transition-transform top-2 right-2 group-hover:-rotate-45  duration-300 text-primary-foreground size-6" />
      </div>
    </Link>
  );
};

export default StoryCard;
