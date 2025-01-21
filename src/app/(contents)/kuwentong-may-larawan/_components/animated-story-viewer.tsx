"use client";

import { StoryWithImage } from "@/data/story-with-images";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface AnimatedStoryViewerProps {
  slides: StoryWithImage[];
  className?: string;
}

const AnimatedStoryViewer: React.FC<AnimatedStoryViewerProps> = ({
  slides,
  className = "",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (
      currentSlide + newDirection >= 0 &&
      currentSlide + newDirection < slides.length
    ) {
      setDirection(newDirection);
      setCurrentSlide(currentSlide + newDirection);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="relative aspect-video rounded-lg overflow-hidden bg-black/5">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full h-full"
          >
            <Image
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative mt-12 z-10">
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-full transition-colors"
          onClick={() => paginate(-1)}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="size-6" />
        </button>

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary/90 text-primary-foreground p-2 rounded-full transition-colors"
          onClick={() => paginate(1)}
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="size-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-gray-700/50"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        key={`text-${currentSlide}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="mt-12 p-6 bg-white rounded-lg shadow-lg"
      >
        <p className="whitespace-pre-wrap text-lg leading-relaxed">
          {slides[currentSlide].content}
        </p>
      </motion.div>
    </div>
  );
};

export default AnimatedStoryViewer;
