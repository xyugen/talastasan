"use client";

import { StoryWithImage } from "@/data/story-with-images";
import parse from "html-react-parser";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import AnimatedStoryViewer from "./_components/animated-story-viewer";

const KuwentongMayLarawan = ({
    storyWithImages,
}: {
    storyWithImages: StoryWithImage[];
}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const flipBookRef = useRef<any>(null);
    const [isFlipPrevDisabled, setIsFlipPrevDisabled] = useState<boolean>(true);
    const [isFlipNextDisabled, setIsFlipNextDisabled] =
        useState<boolean>(false);

    const handleFlipPrev = () => {
        if (!flipBookRef.current) return;

        const pageFlip = flipBookRef.current?.pageFlip();
        pageFlip.flipPrev({ corner: "bottom" });
    };

    const handleFlipNext = () => {
        if (!flipBookRef.current) return;

        const pageFlip = flipBookRef.current?.pageFlip();
        pageFlip.flipNext({ corner: "top" });
    };

    const handleFlip = () => {
        if (!flipBookRef.current) return;

        const pageFlip = flipBookRef.current?.pageFlip();

        setIsFlipPrevDisabled(pageFlip.getCurrentPageIndex() === 0);
        setIsFlipNextDisabled(
            pageFlip.getCurrentPageIndex() + 1 ===
                storyWithImages.length * 2 - 1
        );
    };

    return (
        <div className="overflow-x-clip w-[90%] mx-auto p-2">
            <div className="hidden md:block">
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-expect-error */}
                <HTMLFlipBook
                    width={400}
                    height={400}
                    maxHeight={800}
                    size="stretch"
                    maxShadowOpacity={0.5}
                    flippingTime={500}
                    autoSize
                    className="border-2 border-secondary rounded"
                    onFlip={handleFlip}
                    ref={flipBookRef}
                >
                    {storyWithImages.flatMap((story, index) => {
                        const isEvenSpread = index % 2 === 0;

                        return isEvenSpread
                            ? [
                                  // Even spread: content first, image second
                                  <div
                                      key={`${index}-content`}
                                      className="bg-white border-2 border-secondary pb-6 relative"
                                  >
                                      <div className="overflow-y-auto overflow-x-hidden max-h-full p-4">
                                          <p className="whitespace-pre-wrap">
                                              {story.parseHTML
                                                  ? parse(story.content)
                                                  : story.content}
                                          </p>
                                      </div>
                                      <small className="absolute bottom-0 w-full text-secondary text-center">
                                          Pahina {index * 2 + 1} /{" "}
                                          {storyWithImages.length * 2}
                                      </small>
                                  </div>,
                                  <div
                                      key={`${index}-image`}
                                      className="bg-white border-2 border-secondary pb-6 relative"
                                  >
                                      <div className="p-4">
                                          <Image
                                              src={story.image}
                                              alt={`Image for slide ${
                                                  index + 1
                                              }`}
                                              className="w-full h-full object-cover"
                                          />
                                      </div>
                                      <small className="absolute bottom-0 w-full text-secondary text-center">
                                          Pahina {index * 2 + 2} /{" "}
                                          {storyWithImages.length * 2}
                                      </small>
                                  </div>,
                              ]
                            : [
                                  // Odd spread: image first, content second
                                  <div
                                      key={`${index}-image`}
                                      className="bg-white border-2 border-secondary pb-6 relative"
                                  >
                                      <div className="p-4">
                                          <Image
                                              src={story.image}
                                              alt={`Image for slide ${
                                                  index + 1
                                              }`}
                                              className="w-full h-full object-cover"
                                          />
                                      </div>
                                      <small className="absolute bottom-0 w-full text-secondary text-center">
                                          Pahina {index * 2 + 1} /{" "}
                                          {storyWithImages.length * 2}
                                      </small>
                                  </div>,
                                  <div
                                      key={`${index}-content`}
                                      className="bg-white border-2 border-secondary pb-6 relative"
                                  >
                                      <div className="overflow-y-auto overflow-x-hidden max-h-full p-4">
                                          <p className="whitespace-pre-wrap">
                                              {story.parseHTML
                                                  ? parse(story.content)
                                                  : story.content}
                                          </p>
                                      </div>
                                      <small className="absolute bottom-0 w-full text-secondary text-center">
                                          Pahina {index * 2 + 2} /{" "}
                                          {storyWithImages.length * 2}
                                      </small>
                                  </div>,
                              ];
                    })}
                </HTMLFlipBook>

                <div className="relative mt-6 pb-12 z-10">
                    <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-full transition-colors disabled:cursor-not-allowed disabled:bg-gray-500/50 disabled:text-gray-800"
                        onClick={handleFlipPrev}
                        disabled={isFlipPrevDisabled}
                    >
                        <ChevronLeft className="size-6" />
                    </button>

                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary/90 text-primary-foreground p-2 rounded-full transition-colors disabled:cursor-not-allowed disabled:bg-gray-500/50 disabled:text-gray-800"
                        onClick={handleFlipNext}
                        disabled={isFlipNextDisabled}
                    >
                        <ChevronRight className="size-6" />
                    </button>
                </div>
            </div>

            <div className="block md:hidden">
                <AnimatedStoryViewer slides={storyWithImages} />
            </div>
        </div>
    );
};

export default KuwentongMayLarawan;
