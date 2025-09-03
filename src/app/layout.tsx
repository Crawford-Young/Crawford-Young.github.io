import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crawford Young | Portfolio",
  description: "Personal website: about, experience, projects, and contact information.",
  metadataBase: new URL("https://crawfordyoung.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur border-b border-white/10">
          <nav className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">Crawford Young</Link>
            <div className="flex gap-4 text-sm">
              <Link href="/#about" className="hover:underline">About</Link>
              <Link href="/#experience" className="hover:underline">Experience</Link>
              <Link href="/projects" className="hover:underline">Projects</Link>
              <Link href="/#contact" className="hover:underline">Contact</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="mt-16 border-t border-white/10 py-8">
          <div className="mx-auto max-w-5xl px-4 text-sm text-foreground/70 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Crawford Young</span>
            <Link href="/#top" className="hover:underline">Back to top</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
