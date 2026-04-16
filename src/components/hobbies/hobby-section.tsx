'use client'

import { cn } from '@/lib/utils'
import type { Hobby } from '@/types'

export function HobbySection({ hobby, reverse = false }: { hobby: Hobby; reverse?: boolean }) {
  return (
    <section
      className={cn(
        'relative rounded-2xl border border-border/60 overflow-hidden',
        'flex flex-col md:flex-row items-center gap-8 p-8 md:p-10',
        'bg-surface/40 backdrop-blur-md',
        'motion-safe:transition-shadow motion-safe:duration-300',
        'hover:border-border hover:shadow-lg hover:shadow-black/20',
        reverse && 'md:flex-row-reverse'
      )}
      style={{
        boxShadow: `0 1px 0 0 ${hobby.accentColor} inset`,
      }}
    >
      {/* Accent top strip */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px opacity-80"
        style={{ background: `linear-gradient(90deg, transparent, ${hobby.accentColor}, transparent)` }}
      />

      {/* Image placeholder — replace src with real photo later */}
      <div
        className="w-full md:w-56 h-44 md:h-56 rounded-xl border border-border/50 flex items-center justify-center shrink-0"
        style={{ background: `radial-gradient(ellipse at center, ${hobby.accentColor}, transparent 70%)` }}
      >
        <p className="text-xs text-muted-foreground/40 select-none">Photo coming soon</p>
      </div>

      <div className="flex-1 min-w-0">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">{hobby.title}</h2>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{hobby.description}</p>
      </div>
    </section>
  )
}
