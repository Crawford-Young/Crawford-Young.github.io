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
  description:
    "Personal website: about, experience, projects, and contact information.",
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
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
          <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
            <Link
              href="/"
              className="font-semibold tracking-tight text-lg hover:text-foreground/80 transition-colors"
            >
              Crawford Young
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <Link
                href="/#about"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/#experience"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Experience
              </Link>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="mt-20 border-t border-border/50 py-12">
          <div className="mx-auto max-w-6xl px-6 text-sm text-muted-foreground flex items-center justify-between">
            <span>© {new Date().getFullYear()} Crawford Young</span>
            <Link
              href="/#top"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Back to top
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
