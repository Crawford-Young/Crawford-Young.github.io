import type { Metadata } from 'next'
import { HobbySection } from '@/components/hobbies/hobby-section'
import { hobbies } from '@/data/hobbies'

export const metadata: Metadata = {
  title: 'Hobbies',
  description: 'The other side — outdoors, instruments, chess, and gaming.',
}

export default function HobbiesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
          Life outside the terminal
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">Beyond the Code</h1>
        <p className="mt-3 text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed">
          What I do when I&apos;m not at a keyboard. (Sometimes also at a keyboard.)
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {hobbies.map((hobby, i) => (
          <HobbySection key={hobby.id} hobby={hobby} reverse={i % 2 === 1} />
        ))}
      </div>
    </div>
  )
}
