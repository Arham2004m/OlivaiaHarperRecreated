"use client";

import Image from "next/image";
import { Reveal } from "./animations";

export function ExpertTeam() {
  return (
    <section className="py-24 md:py-48 bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-32 items-center">
          <div className="w-full lg:w-1/2 text-center md:text-left">
            <Reveal>
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold mb-8 md:mb-12 block">
                The Collective
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] tracking-tight mb-8 md:mb-12">
                Expert Team
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-6 md:mb-8 text-accent">
                Built on Experience. <br className="hidden md:block" />Driven by Perspective.
              </h3>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-10 md:mb-12 max-w-lg mx-auto md:mx-0">
                Decades of combined experience, shaping homes defined by <span className="text-foreground">quality, intention, and long-term value.</span>
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex justify-center md:justify-start gap-12 border-t border-border pt-10 md:pt-12">
                <div>
                  <h4 className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold mb-2">Projects</h4>
                  <p className="text-2xl md:text-3xl font-serif">50+</p>
                </div>
                <div>
                  <h4 className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold mb-2">Experience</h4>
                  <p className="text-2xl md:text-3xl font-serif">20 Yrs</p>
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="w-full lg:w-1/2">
            <Reveal delay={0.2} direction="left">
              <div className="aspect-[4/5] relative overflow-hidden bg-muted group rounded-none">
                <Image
                  src="/images/team.jpg"
                  alt="Expert Team"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
