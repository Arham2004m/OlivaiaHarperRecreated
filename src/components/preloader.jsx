"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Icons } from "./icons";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Slightly longer for the video reveal

    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.215, 0.61, 0.355, 1],
      }
    },
  };

  const text = "OLIVIA HARPER HOMES";

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Reveal Media Background */}
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute inset-0 z-0"
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
          </motion.div>

          <div className="relative z-10 flex flex-col items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="text-foreground"
            >
              <Icons.Logo className="h-14 md:h-20" />
            </motion.div>
            
            <div className="flex gap-[0.2em] overflow-hidden px-4 text-center justify-center flex-wrap">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={item}
                  className="text-xs md:text-sm uppercase tracking-[0.5em] font-medium text-foreground whitespace-pre"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-20 overflow-hidden">
             <motion.span 
               initial={{ y: "100%" }}
               animate={{ y: 0 }}
               transition={{ delay: 1, duration: 1 }}
               className="text-[9px] uppercase tracking-[0.8em] text-muted-foreground block"
             >
               Luxury Homebuilding
             </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
