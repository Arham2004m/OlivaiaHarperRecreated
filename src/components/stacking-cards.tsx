"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
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

interface CardProps {
  project: typeof projects[0];
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function Card({ project, index, progress, range, targetScale }: CardProps) {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }} 
        className="relative flex flex-col md:flex-row w-full max-w-6xl h-[60vh] md:h-[70vh] bg-background origin-top overflow-hidden border border-border/50"
      >
        <div className="relative w-full md:w-2/3 h-full overflow-hidden">
          <motion.div className="w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        <div className="w-full md:w-1/3 p-12 md:p-16 flex flex-col justify-center bg-background">
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold mb-6 block">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium">
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
    <section ref={containerRef} className="relative bg-[#EEEBE4] pt-32 pb-[10vh]">
      <div className="container mx-auto px-6 mb-24 max-w-6xl">
        <Reveal>
          <h2 className="text-5xl md:text-8xl font-serif leading-[1.1] tracking-tight">
            A Deliberate Approach to Luxury Homebuilding
          </h2>
        </Reveal>
      </div>

      <div className="px-6 md:px-12">
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
