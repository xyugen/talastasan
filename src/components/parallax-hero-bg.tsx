"use client";

import HeroImage from "@/assets/images/hero-image.jpg";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ParallaxHeroBG = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Mouse parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.01;
      const moveY = (clientY - window.innerHeight / 2) * 0.01;
      setMousePosition({ x: moveX, y: moveY });
      console.log(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${HeroImage.src})`,
        y: -mousePosition.y,
        x: -mousePosition.x,
        scale: 1.1,
      }}
    />
  );
};

export default ParallaxHeroBG;
