import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-6 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Crawford Young
        </span>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Crawford-Young"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/crawford-young/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
