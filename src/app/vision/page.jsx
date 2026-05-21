import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function VisionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-24 md:pt-48 pb-16 md:pb-24 bg-foreground text-background min-h-screen">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl md:text-[10rem] font-serif mb-12 md:mb-20 leading-[0.9] tracking-tighter text-center md:text-left">Our Vision</h1>
          <div className="max-w-5xl mx-auto md:mx-0">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif mb-8 md:mb-16 leading-tight text-center md:text-left">
              A Home Shaped <br className="hidden md:block" />Around How You Live.
            </h2>
            <p className="text-lg sm:text-xl md:text-4xl font-light leading-relaxed mb-12 md:mb-20 text-background/80 text-center md:text-left">
              We believe that true luxury is found in the intersection of beauty and functionality. Our vision is to create homes that are not only visual masterpieces but also perfectly adapted to the needs and desires of their inhabitants.
            </p>
            <div className="aspect-video relative overflow-hidden bg-background/10 mb-12 md:mb-20">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src="/images/hero-fallback.jpg" 
                 alt="Vision" 
                 className="w-full h-full object-cover"
               />
            </div>
            <p className="text-base sm:text-lg md:text-2xl font-light leading-relaxed text-background/60 italic max-w-3xl text-center md:text-left mx-auto md:mx-0">
              "We don't just build houses; we curate environments. Our goal is to blend the boundaries between indoor and outdoor living, creating spaces that inspire and endure."
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
