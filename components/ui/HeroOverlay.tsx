"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { HeroParallax } from "./hero";

export const HeroOverlay = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 👇 Delay hero fade out until 25% scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 1, 0]);

  // 👇 Delay text fade-in until ~30% scroll
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);

  // 👇 Smooth x scrolling for parallax lines
  const x1 = useTransform(scrollYProgress, [0.3, 1], ["-20%", "20%"]);
  const x2 = useTransform(scrollYProgress, [0.3, 1], ["20%", "-20%"]);
  const x3 = useTransform(scrollYProgress, [0.3, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative h-[200vh] overflow-hidden"
      style={{ backgroundColor: 'transparent' }} // Set your desired background color or image
    >
      {/* Hero Section stays solid until scroll begins */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="h-screen sticky top-0 z-20"
      >
        <HeroParallax
          products={[
            { title: 'CRM', link: '/product1', thumbnail: '/images/hero1.jpg' },
            { title: 'AI AVATAR', link: '/product2', thumbnail: '/images/hero2.jpg' },
          ]}
        />
      </motion.div>

      {/* Parallax Text fades in with scroll */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="h-screen sticky top-0 flex flex-col justify-center items-center z-10 space-y-14"
      >
        <motion.div style={{ x: x1 }} className="text-[6vw] font-montserrat font-bold whitespace-nowrap">
          “From data to destiny, we’re here to
        </motion.div>
        <motion.div style={{ x: x2 }} className="text-[6vw] font-montserrat font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          rewrite the future. Not to work for
        </motion.div>
        <motion.div style={{ x: x3 }} className="text-[6vw] font-poppins font-bold whitespace-nowrap">
          you but to work with you  : )
        </motion.div>
      </motion.div>
    </section>
  );
};
