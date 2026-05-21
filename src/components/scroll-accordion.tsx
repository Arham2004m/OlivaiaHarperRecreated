"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Reveal } from "./animations";

const services = [
  {
    title: "Custom Home Construction",
    description: "Hands-on construction management with close attention to materials, craftsmanship, and execution—delivering homes built to endure.",
    image: "/images/team.jpg",
  },
  {
    title: "Design & Material Curation",
    description: "Careful selection of finishes, materials, and architectural details to ensure cohesion, quality, and timeless appeal throughout the home.",
    image: "/images/service-3.jpg",
  },
  {
    title: "End-to-End Project Oversight",
    description: "From initial concept through completion, we maintain direct involvement to ensure alignment, precision, and confidence at every stage.",
    image: "/images/service-2.jpg",
  },
  {
    title: "Lifestyle & Program Definition",
    description: "We translate how you live into spatial requirements, layouts, and priorities—shaping a home that truly supports daily life.",
    image: "/images/service-1.jpg",
  },
];

interface AccordionItemProps {
  service: typeof services[0];
  index: number;
  progress: MotionValue<number>;
}

function AccordionItem({ service, index, progress }: AccordionItemProps) {
  const start = index / services.length;
  const end = (index + 1) / services.length;
  
  const isActiveOpacity = useTransform(progress, 
    [start - 0.1, start, end - 0.1, end], 
    [0.3, 1, 1, 0.3]
  );

  const finalOpacity = index === services.length - 1 
    ? useTransform(progress, [start - 0.1, start], [0.3, 1])
    : isActiveOpacity;

  const height = useTransform(progress,
    [start, start + 0.1, end - 0.1, end],
    ["0px", "200px", "200px", "0px"]
  );

  const finalHeight = index === services.length - 1
    ? useTransform(progress, [start, start + 0.1], ["0px", "200px"])
    : height;

  const dotScale = useTransform(progress, [start - 0.05, start], [0, 1]);

  return (
    <motion.div 
      style={{ opacity: finalOpacity }}
      className="border-b border-border overflow-hidden"
    >
      <div className="py-8 md:py-12 flex items-center gap-6">
        <div className="w-2 h-2 rounded-full border border-foreground flex items-center justify-center p-0.5">
          <motion.div 
            style={{ scale: dotScale }}
            className="w-full h-full bg-foreground rounded-full"
          />
        </div>
        <h3 className="text-2xl md:text-4xl font-serif">
          {service.title}
        </h3>
      </div>
      
      <motion.div
        style={{ height: finalHeight }}
        className="overflow-hidden"
      >
        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed pl-10 pb-12 max-w-md">
          {service.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function ScrollAccordion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  return (
    <section ref={containerRef} className="relative bg-background min-h-[300vh]">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32">
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-20">
              <Reveal>
                <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold mb-12 block">
                  Excellence Defined
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight mb-16">
                  Architectural Mastery & Engineering Precision
                </h2>
              </Reveal>

              <div className="flex flex-col border-t border-border mt-8">
                {services.map((service, index) => (
                  <AccordionItem 
                    key={index} 
                    service={service} 
                    index={index} 
                    progress={scrollYProgress} 
                  />
                ))}
              </div>
            </div>

            <div className="hidden lg:block w-1/2 relative h-[80vh] my-auto">
              <div className="relative w-full h-full overflow-hidden bg-muted">
                {services.map((service, index) => {
                  const start = index / services.length;
                  const end = (index + 1) / services.length;
                  
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const opacity = useTransform(scrollYProgress,
                    [start - 0.05, start, end - 0.05, end],
                    [0, 1, 1, 0]
                  );

                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const finalImgOpacity = index === services.length - 1
                    ? useTransform(scrollYProgress, [start - 0.05, start], [0, 1])
                    : opacity;

                  return (
                    <motion.div
                      key={index}
                      style={{ opacity: finalImgOpacity }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
