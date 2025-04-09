"use client";

import { useStateStore } from "@/lib/state-store";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BlurFade from "../ui/blur-fade";
import { cn } from "@/lib/utils";
interface StoryCardProps {
    title: string;
    description: string;
    image?: StaticImageData | string;
    href?: string;
    index?: number;
    imageClassName?: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
    title,
    description,
    image,
    href,
    imageClassName,
    index = 0,
}) => {
    const { setIsSearchExpanded, setSearchValue } = useStateStore();
    console.log(imageClassName);
    return (
        <BlurFade
            className="group relative overflow-hidden rounded-lg border-4 border-secondary bg-white transition-transform"
            delay={0.3 * index}
            inView
        >
            <Link
                href={href ? `/mga-nilalaman${href}` : "#stories"}
                className="relative"
                onClick={() => {
                    setIsSearchExpanded(false);
                    setSearchValue("");
                }}
            >
                <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                        src={image ? image : ""}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className={cn(
                            "transition-[scale_filter] grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 duration-300",
                            imageClassName
                        )}
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
