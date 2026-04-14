import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { PillNav } from '@/components/layout/nav'
import { Footer } from '@/components/layout/footer'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Crawford Young', template: '%s | Crawford Young' },
  description: 'AI & Software Engineer building practical products at the intersection of modern web development and AI-driven workflows.',
  metadataBase: new URL('https://crawford-young.github.io'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <PillNav />
          <main className="pt-16 md:pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
