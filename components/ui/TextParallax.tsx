"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const TextParallax = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const x1 = useTransform(scrollY, [0, 1000], ["-20%", "20%"]);
  const x2 = useTransform(scrollY, [0, 1000], ["20%", "-20%"]);
  const x3 = useTransform(scrollY, [0, 1000], ["-10%", "10%"]);

  return (
    <section className="h-[100vh] flex flex-col justify-center items-center bg-white text-black overflow-hidden space-y-14">
      <motion.div style={{ x: x1 }} className="whitespace-nowrap text-[6vw] font-bold font-playfair">
        Front End Developer Front End Developer Front End Developer
      </motion.div>

      <motion.div style={{ x: x2 }} className="whitespace-nowrap text-[6vw] font-bold font-bebas">
        Front End Developer Front End Developer Front End Developer
      </motion.div>

      <motion.div style={{ x: x3 }} className="whitespace-nowrap text-[6vw] font-bold font-poppins">
        Front End Developer Front End Developer Front End Developer
      </motion.div>
    </section>
  );
};
