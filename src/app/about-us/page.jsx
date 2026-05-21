import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-24 md:pt-48 pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif mb-10 md:mb-16 text-center md:text-left">About Us</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
            <div className="aspect-[4/5] bg-muted relative overflow-hidden order-2 lg:order-1">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src="/images/team.jpg" 
                 alt="Team" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="flex flex-col justify-center order-1 lg:order-2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-6 md:mb-8 leading-tight">Built on Experience. <br className="hidden md:block" />Driven by Perspective.</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-light max-w-xl mx-auto md:mx-0">
                Since 2016, Olivia Harper Homes has been at the forefront of luxury homebuilding in South Florida. Our team brings decades of combined experience in architecture, engineering, and construction management to every project.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-light max-w-xl mx-auto md:mx-0">
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
