"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { StackingCards } from "@/components/stacking-cards";
import { ScrollAccordion } from "@/components/scroll-accordion";
import { ScrollRevealText } from "@/components/scroll-reveal-text";
import { ExpertTeam } from "@/components/expert-team";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function VisionSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const text = "A Home Shaped Around How You Live.";
  const words = text.split(" ");

  return (
    <section 
      id="vision" 
      ref={containerRef}
      className="relative bg-foreground py-[30vh] md:py-[50vh]"
    >
      <div className="container mx-auto px-6 sticky top-[20vh] md:top-[30vh]">
        <div className="max-w-6xl">
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-background/30 font-semibold mb-8 md:mb-12 block">
            Our Vision
          </span>
          <div className="flex flex-wrap text-4xl sm:text-6xl md:text-[10rem] font-serif leading-[0.9] tracking-tighter">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
              
              return (
                <motion.span
                  key={i}
                  style={{ opacity }}
                  className="mr-[0.2em] text-background"
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
          
          <Reveal delay={0.5}>
            <p className="mt-12 md:mt-20 text-xl sm:text-2xl md:text-5xl text-background/50 font-light leading-tight max-w-4xl">
              We don't just build houses; we curate environments. Our vision is to blend the boundaries between indoor and outdoor living, creating spaces that inspire and endure.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        
        <ScrollRevealText />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Reveal>
                <p className="text-muted-foreground leading-relaxed text-xl md:text-2xl font-light">
                  At Olivia Harper Homes, we focus on creating one-of-a-kind residences that elevate the way people live. Our approach centers on thoughtful design, enduring quality, and practical functionality, shaped around the individual vision and lifestyle of each client. Driven by creativity, innovation, and the high expectations of the Miami market, we position ourselves as a reliable partner in bringing personal home concepts to life.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <StackingCards />
        <ScrollAccordion />
        <VisionSection />
        <ExpertTeam />
      </main>
      <Footer />
    </div>
  );
}
