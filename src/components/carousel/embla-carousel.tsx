"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { DotButton, useDotButton } from "./embla-carousel-dot-button";

export default function EmblaCarousel({
  images,
  onChangeAction,
}: {
  images: string[] | StaticImageData[];
  onChangeAction?: (index: number) => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    const currentIndex = emblaApi.selectedScrollSnap();
    if (onChangeAction) onChangeAction(currentIndex); // Notify the parent with the current index
  }, [emblaApi, onChangeAction]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(); // Trigger onChange immediately on mount
    emblaApi.on("select", onSelect); // Trigger onChange on slide selection
  }, [emblaApi, onSelect]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="relative max-w-lg mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="relative flex-[0_0_100%] min-w-0" key={index}>
              <Image
                src={src || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                width={600}
                height={400}
                className="w-fit h-full object-fill rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          className="rounded-full bg-white/50 p-3 text-secondary shadow-md transition hover:bg-white/75 hover:shadow-lg"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="rounded-full bg-white/50 p-3 text-secondary shadow-md transition hover:bg-white/75 hover:shadow-lg"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => {
              onDotButtonClick(index);
              if (onChangeAction) onChangeAction(index); // Notify the parent with the index when a dot is clicked
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 rounded-full transition ${
              index === selectedIndex
                ? "bg-primary shadow-md"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
