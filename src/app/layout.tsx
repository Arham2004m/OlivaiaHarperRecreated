import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Preloader } from "@/components/preloader";
import { AppProvider } from "@/lib/app-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const gallient = localFont({
  src: "../../public/fonts/Gallient.woff2",
  variable: "--font-gallient",
});

export const metadata: Metadata = {
  title: "Olivia Harper Homes | Luxury Homebuilding in Florida",
  description: "Elevating Miami's most distinctive properties through architectural mastery and engineering excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${gallient.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <AppProvider>
          <Preloader />
          <SmoothScroll />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
