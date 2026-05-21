import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-24 md:pt-48 pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif mb-6 md:mb-10 leading-tight">Contact Us</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 md:mb-16 font-light max-w-lg mx-auto md:mx-0">
                Ready to start your next project? We'd love to hear from you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 md:gap-10">
                <div>
                  <h4 className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-bold mb-3 md:mb-4 text-accent">Phone</h4>
                  <p className="text-xl md:text-2xl font-serif">305-336-7195</p>
                </div>
                <div>
                  <h4 className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-bold mb-3 md:mb-4 text-accent">Email</h4>
                  <p className="text-xl md:text-2xl font-serif">info@oliviaharperhomes.com</p>
                </div>
                <div>
                  <h4 className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-bold mb-3 md:mb-4 text-accent">Office</h4>
                  <p className="text-xl md:text-2xl font-serif">Miami, Florida, United States</p>
                </div>
              </div>
            </div>
            <div className="bg-[#EEEBE4] p-8 md:p-20 shadow-sm border border-border/20">
              <form className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">First Name</label>
                    <input type="text" className="w-full bg-background border border-border/50 p-4 md:p-5 focus:outline-none focus:border-foreground transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Last Name</label>
                    <input type="text" className="w-full bg-background border border-border/50 p-4 md:p-5 focus:outline-none focus:border-foreground transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Email Address</label>
                  <input type="email" className="w-full bg-background border border-border/50 p-4 md:p-5 focus:outline-none focus:border-foreground transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Message</label>
                  <textarea rows={6} className="w-full bg-background border border-border/50 p-4 md:p-5 focus:outline-none focus:border-foreground transition-colors resize-none" />
                </div>
                <Button className="w-full rounded-full py-8 md:py-10 uppercase tracking-[0.3em] text-[10px] font-bold shadow-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
