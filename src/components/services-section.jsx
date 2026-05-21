"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations";

const services = [
  {
    title: "Luxury Residences",
    description: "Bespoke estates designed for modern living and architectural excellence.",
    image: "/images/service-1.jpg",
  },
  {
    title: "Custom Construction",
    description: "Precision engineering and master craftsmanship at every stage of the build.",
    image: "/images/service-2.jpg",
  },
  {
    title: "Design Curation",
    description: "Thoughtful selection of materials and finishes that define the home's character.",
    image: "/images/service-3.jpg",
  },
  {
    title: "Project Oversight",
    description: "Comprehensive management ensuring every detail meets our exacting standards.",
    image: "/images/team.jpg",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-48 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 md:mb-32 gap-12">
          <div className="max-w-3xl">
            <Reveal>
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold mb-6 block">
                Excellence Defined
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-5xl md:text-8xl font-serif leading-[1.1] tracking-tight">
                Architectural Mastery & Engineering Precision
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} direction="left">
            <div className="max-w-sm">
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                We provide a complete suite of services tailored to the most discerning homeowners in South Florida.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 border border-border/40 overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="bg-background p-10 md:p-20 flex flex-col justify-between group min-h-[600px] relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-serif mb-6 group-hover:text-muted-foreground transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-12 max-w-sm text-lg font-light">
                  {service.description}
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden bg-muted z-10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-secondary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
