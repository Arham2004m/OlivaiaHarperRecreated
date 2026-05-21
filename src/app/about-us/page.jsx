import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-serif mb-12">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="aspect-[4/5] bg-muted relative overflow-hidden">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src="/images/team.jpg" 
                 alt="Team" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif mb-6 shadow-sm">Built on Experience. Driven by Perspective.</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg font-light">
                Since 2016, Olivia Harper Homes has been at the forefront of luxury homebuilding in South Florida. Our team brings decades of combined experience in architecture, engineering, and construction management to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg font-light">
                We believe that a home is more than just a structure; it's a reflection of the people who live within it. That's why we take a personalized approach to every build, ensuring that every detail is tailored to your unique lifestyle and aesthetic preferences.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
