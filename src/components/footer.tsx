import Link from "next/link";
import { Icons } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <Icons.Logo className="h-10 text-foreground" />
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-8">
              Elevating Miami's most distinctive properties through architectural mastery and engineering excellence. Founded in 2016.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 border border-border hover:bg-foreground hover:text-background transition-colors">
                <Icons.Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="p-2 border border-border hover:bg-foreground hover:text-background transition-colors">
                <Icons.Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="p-2 border border-border hover:bg-foreground hover:text-background transition-colors">
                <Icons.Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#vision" className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
                  Vision
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-3">
                <Icons.Phone className="h-4 w-4 text-muted-foreground mt-1" />
                <span className="text-sm text-muted-foreground">305-336-7195</span>
              </li>
              <li className="flex items-start gap-3">
                <Icons.MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                <span className="text-sm text-muted-foreground max-w-[200px]">
                  Miami, Florida<br />
                  United States
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icons.Mail className="h-4 w-4 text-muted-foreground mt-1" />
                <span className="text-sm text-muted-foreground">info@oliviaharperhomes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              © 2026 Olivia Harper Homes. All rights reserved.
            </p>
            <p className="text-[10px] text-muted-foreground/60 max-w-2xl">
              Disclaimer: This is a technical clone of Olivia Harper Homes built for educational/portfolio purposes to demonstrate Next.js, Tailwind CSS, and Framer Motion skills. Not affiliated with the original brand.
            </p>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
