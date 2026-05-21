"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations";

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

export function ProjectSection() {
  return (
    <section id="projects" className="py-24 md:py-48 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 md:mb-32">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold mb-6 block">
              Our Portfolio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-5xl md:text-8xl font-serif leading-[1.1] tracking-tight">
              A Deliberate Approach to Luxury Homebuilding
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.15}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-[0.215,0.61,0.355,1] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
                </div>
                <div className="overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-3 block"
                  >
                    {project.category}
                  </motion.span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-2 group-hover:text-muted-foreground transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium">
                  {project.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
