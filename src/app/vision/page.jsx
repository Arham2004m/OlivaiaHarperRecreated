import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function VisionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-32 pb-24 bg-foreground text-background min-h-screen">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-8xl font-serif mb-16 leading-tight">Our Vision</h1>
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-relaxed">
              A Home Shaped Around How You Live.
            </h2>
            <p className="text-xl md:text-3xl font-light leading-relaxed mb-12 text-background/80">
              We believe that true luxury is found in the intersection of beauty and functionality. Our vision is to create homes that are not only visual masterpieces but also perfectly adapted to the needs and desires of their inhabitants.
            </p>
            <div className="aspect-video relative overflow-hidden bg-background/10 mb-12">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src="/images/hero-fallback.jpg" 
                 alt="Vision" 
                 className="w-full h-full object-cover"
               />
            </div>
            <p className="text-lg md:text-xl font-light leading-relaxed text-background/60 italic max-w-2xl">
              "We don't just build houses; we curate environments. Our goal is to blend the boundaries between indoor and outdoor living, creating spaces that inspire and endure."
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
