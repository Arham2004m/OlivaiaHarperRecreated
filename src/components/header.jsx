"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/lib/app-context";

const navLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Vision", href: "/vision" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoaded } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const glassBoxClass = cn(
    "bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] rounded-full transition-all duration-500",
    isScrolled ? "bg-white/40 border-white/30" : "bg-white/10"
  );

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-6 md:py-8 flex justify-center"
        >
          <div className="max-w-7xl w-full flex items-center justify-between gap-2 md:gap-4">
            
            {/* Logo Box */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={cn(glassBoxClass, "px-4 py-3 md:px-8 md:py-4 flex items-center")}
            >
              <Link href="/" className="flex items-center">
                <Icons.Logo className="h-5 md:h-8 text-foreground" />
              </Link>
            </motion.div>

            {/* Navigation Routes Box */}
            <nav className={cn(glassBoxClass, "hidden md:flex items-center gap-10 px-10 py-4")}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Contact Button Box */}
            <div className="hidden md:block">
              <Link href="/contact">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className={cn(glassBoxClass, "px-1 py-1")}
                >
                  <Button variant="ghost" className="rounded-full hover:bg-transparent uppercase tracking-[0.2em] text-[10px] px-8 py-6 font-bold">
                    Contact Us
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Toggle Box */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={cn(glassBoxClass, "md:hidden p-2.5")}
            >
              <button
                className="text-foreground p-0.5"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <Icons.X className="h-5 w-5" /> : <Icons.Menu className="h-5 w-5" />}
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="absolute top-full left-4 right-4 mt-2 md:hidden overflow-hidden"
              >
                <div className={cn(glassBoxClass, "rounded-[24px] p-6 flex flex-col gap-4")}>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-sm font-bold uppercase tracking-[0.2em] text-center py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full rounded-full uppercase tracking-widest text-[10px] py-6 font-bold">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
