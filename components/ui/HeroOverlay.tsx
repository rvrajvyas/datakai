"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const HeroOverlay = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Adjust opacity to fade out the background after 50% scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Adjust opacity for text to make it fully visible from the start
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 0.5], [0, 1, 1]);

  // Smooth parallax effect for the text elements
  const x1 = useTransform(scrollYProgress, [0.3, 1], ["-30%", "40%"]);
  const x2 = useTransform(scrollYProgress, [0.3, 1], ["40%", "-40%"]);
  const x3 = useTransform(scrollYProgress, [0.3, 1], ["-30%", "30%"]);

  // Move text downwards using the transform property
  const yPosition = useTransform(scrollYProgress, [0, 0.1], ["0%", "40%"]); // Adjust the value to control the downward movement

  return (
    <section
      ref={ref}
      className="relative h-[160vh] overflow-hidden bg-black"
    >
      {/* Parallax Text fades in with scroll */}
      <motion.div
        style={{ opacity: textOpacity, y: yPosition }}
        className="h-screen sticky top-0 flex flex-col justify-center items-center z-10 space-y-5"
      >
        
        <motion.div
          style={{ x: x1 }}
          className="text-[6.5vw] font-cool font-bold whitespace-nowrap text-white tracking-wide"
        >
            From data to destiny                           
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className="text-[7vw] font-maus font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 tracking-wider "
        > we’re here to
        </motion.div>
        <motion.div
          style={{ x: x3 }}
          className="text-[6.5vw] font-cool font-bold whitespace-nowrap text-white tracking-wide "
        >
          to rewrite the future
          </motion.div>
      </motion.div>
    </section>
  );
};
