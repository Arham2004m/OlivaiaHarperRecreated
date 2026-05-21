import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicesSection } from "@/components/services-section";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-6 mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            From initial design curation to final project oversight, we provide comprehensive services for the most discerning homeowners.
          </p>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
