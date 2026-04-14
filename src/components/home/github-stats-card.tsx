import Link from 'next/link'
import { Card, CardContent } from '@crawfordyoung/ui'
import { GlowCard } from '@/components/effects/glow-card'
import { Github } from 'lucide-react'

const STATS = [
  { label: 'Repos', value: '15' },
  { label: 'Stars', value: '33' },
]

const BADGES = ['Quickdraw', 'Pull Shark', 'YOLO']

export function GitHubStatsCard() {
  return (
    <GlowCard className="h-full">
      <Card className="h-full bg-surface border-border">
        <CardContent className="p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Github className="h-3.5 w-3.5 text-accent" />
            <p className="text-[10px] font-semibold text-accent uppercase tracking-[0.15em]">GitHub</p>
          </div>
          <div className="flex gap-6">
            {STATS.map(({ label, value }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {BADGES.map(b => (
              <span key={b} className="text-xs bg-surface-raised text-muted-foreground px-2 py-0.5 rounded-full border border-border">
                {b}
              </span>
            ))}
          </div>
          <Link
            href="https://github.com/Crawford-Young"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            @Crawford-Young
          </Link>
        </CardContent>
      </Card>
    </GlowCard>
  )
}
