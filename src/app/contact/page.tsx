import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif mb-8">Contact Us</h1>
              <p className="text-xl text-muted-foreground mb-12 font-light">
                Ready to start your next project? We'd love to hear from you.
              </p>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Phone</h4>
                  <p className="text-lg">305-336-7195</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Email</h4>
                  <p className="text-lg">info@oliviaharperhomes.com</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Office</h4>
                  <p className="text-lg">Miami, Florida, United States</p>
                </div>
              </div>
            </div>
            <div className="bg-secondary/30 p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold">First Name</label>
                    <input type="text" className="w-full bg-background border border-border p-3 focus:outline-none focus:border-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold">Last Name</label>
                    <input type="text" className="w-full bg-background border border-border p-3 focus:outline-none focus:border-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold">Email Address</label>
                  <input type="email" className="w-full bg-background border border-border p-3 focus:outline-none focus:border-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold">Message</label>
                  <textarea rows={6} className="w-full bg-background border border-border p-3 focus:outline-none focus:border-foreground" />
                </div>
                <Button className="w-full rounded-none py-6 uppercase tracking-widest text-xs font-bold">
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
