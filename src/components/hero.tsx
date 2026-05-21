"use client";

import { motion, useScroll, useTransform, Easing } from "framer-motion";
import { useRef } from "react";
import { Icons } from "./icons";

const heroWords = ["Architectural", "Crafted", "Considered"];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.215, 0.61, 0.355, 1] as Easing,
    },
  },
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Video grows from 70% to 100% of viewport
  const videoScale = useTransform(scrollYProgress, [0.3, 0.7], [0.7, 1]);
  const videoWidth = useTransform(scrollYProgress, [0.3, 0.7], ["70vw", "100vw"]);
  const videoHeight = useTransform(scrollYProgress, [0.3, 0.7], ["60vh", "100vh"]);
  const videoBorderRadius = useTransform(scrollYProgress, [0.3, 0.6], ["24px", "0px"]);

  // Words fade out as video expands
  const wordsOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const wordsY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-background">
      {/* 1. The Words (Initial View) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-10 pointer-events-none">
        <motion.div
          style={{ opacity: wordsOpacity, y: wordsY }}
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 md:gap-10 items-start"
        >
          {heroWords.map((word) => (
            <motion.div
              key={word}
              variants={item}
              className="flex items-center gap-6 md:gap-12"
            >
              <div className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-accent" />
              <h1 className="text-6xl md:text-[11rem] font-serif leading-[0.8] tracking-tighter uppercase text-foreground">
                {word}
              </h1>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-16 self-center flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-light">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Icons.ChevronDown className="text-muted-foreground/30 h-5 w-5 stroke-[1px]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* 2. The Video Box (Scroll Triggered) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0">
        <motion.div
          style={{ 
            width: videoWidth,
            height: videoHeight,
            scale: videoScale,
            borderRadius: videoBorderRadius,
          }}
          className="relative bg-muted overflow-hidden shadow-2xl"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </div>

      {/* Spacer to allow for the 300vh scroll progress */}
      <div className="h-[200vh]" />
    </div>
  );
}
