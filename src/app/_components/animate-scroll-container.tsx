"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React from "react";

const AnimateScrollContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { scrollY } = useScroll();

  return (
    <motion.div
      initial={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      style={{
        borderTopLeftRadius: useTransform(
          scrollY,
          [window.innerHeight * 0.5, window.innerHeight],
          [0, 48]
        ),
        borderTopRightRadius: useTransform(
          scrollY,
          [window.innerHeight * 0.5, window.innerHeight],
          [0, 48]
        ),
      }}
      className="relative z-10 bg-background shadow-2xl"
    >
      {children}
    </motion.div>
  );
};

export default AnimateScrollContainer;
