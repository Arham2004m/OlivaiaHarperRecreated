"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollRevealText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-background overflow-hidden flex flex-col gap-4">
      <motion.div style={{ x: x1 }} className="whitespace-nowrap">
        <h2 className="text-6xl md:text-[8rem] font-serif tracking-tighter text-foreground">
          Elevating Miami's most distinctive properties
        </h2>
      </motion.div>
      <motion.div style={{ x: x2 }} className="whitespace-nowrap">
        <h2 className="text-6xl md:text-[8rem] font-serif tracking-tighter text-muted-foreground">
          through architectural mastery, engineering
        </h2>
      </motion.div>
      <motion.div style={{ x: x3 }} className="whitespace-nowrap">
        <h2 className="text-6xl md:text-[8rem] font-serif tracking-tighter text-foreground">
          excellence, and unparalleled design.
        </h2>
      </motion.div>
    </section>
  );
}
