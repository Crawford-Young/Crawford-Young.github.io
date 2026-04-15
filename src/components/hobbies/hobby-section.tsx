import { cn } from '@/lib/utils'
import type { Hobby } from '@/types'

export function HobbySection({ hobby, reverse = false }: { hobby: Hobby; reverse?: boolean }) {
  return (
    <section
      className={cn(
        'relative rounded-2xl border border-border overflow-hidden p-8 md:p-12',
        'flex flex-col md:flex-row items-center gap-8',
        reverse && 'md:flex-row-reverse'
      )}
      style={{
        background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${hobby.accentColor}, transparent)`,
      }}
    >
      {/* Image placeholder — replace src with real photo later */}
      <div className="w-full md:w-64 h-52 md:h-64 rounded-xl bg-surface-raised border border-border flex items-center justify-center shrink-0">
        <p className="text-xs text-muted-foreground/50">Photo coming soon</p>
      </div>

      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{hobby.title}</h2>
        <p className="text-muted-foreground leading-relaxed">{hobby.description}</p>
      </div>
    </section>
  )
}
