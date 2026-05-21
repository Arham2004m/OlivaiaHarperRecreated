"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./animations";

const projects = [
  {
    title: "1716 S. Bayshore Drive",
    category: "Current Development",
    location: "Miami, FL",
    image: "/images/project-1.jpg",
  },
  {
    title: "Hibiscus Island Residence",
    category: "Completed Project",
    location: "Miami Beach, FL",
    image: "/images/project-2.jpg",
  },
  {
    title: "Surfside Modern",
    category: "Current Development",
    location: "Surfside, FL",
    image: "/images/project-3.jpg",
  },
];

function Card({ project, index, progress, range, targetScale }) {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
      <motion.div 
        style={{ scale, top: `calc(-2vh + ${index * 20}px)` }} 
        className="relative flex flex-col md:flex-row w-full max-w-6xl h-[70vh] md:h-[70vh] bg-background origin-top overflow-hidden border border-border/50"
      >
        <div className="relative w-full h-1/2 md:w-2/3 md:h-full overflow-hidden">
          <motion.div className="w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        <div className="w-full h-1/2 md:w-1/3 p-8 md:p-16 flex flex-col justify-center bg-background">
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold mb-4 md:mb-6 block">
            {project.category}
          </span>
          <h3 className="text-xl sm:text-2xl md:text-5xl font-serif mb-4 md:mb-6 leading-tight">
            {project.title}
          </h3>
          <p className="text-[10px] md:text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium">
            {project.location}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function StackingCards() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative bg-[#EEEBE4] pt-24 md:pt-32 pb-[5vh] md:pb-[10vh]">
      <div className="container mx-auto px-6 mb-16 md:mb-24 max-w-6xl">
        <Reveal>
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-serif leading-[1.1] tracking-tight text-center md:text-left">
            A Deliberate Approach to Luxury Homebuilding
          </h2>
        </Reveal>
      </div>

      <div className="px-4 md:px-12">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <Card 
              key={i} 
              index={i} 
              project={project} 
              progress={scrollYProgress} 
              range={[i * 0.33, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
}
