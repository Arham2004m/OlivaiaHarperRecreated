import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectSection } from "@/components/project-section";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-6 mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            A portfolio of architectural mastery and engineering excellence in Miami and beyond.
          </p>
        </div>
        <ProjectSection />
      </main>
      <Footer />
    </div>
  );
}
