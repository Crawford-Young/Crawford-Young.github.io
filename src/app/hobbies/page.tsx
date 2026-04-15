import type { Metadata } from 'next'
import { Aurora } from '@/components/effects/aurora'
import { HobbySection } from '@/components/hobbies/hobby-section'
import { hobbies } from '@/data/hobbies'

export const metadata: Metadata = {
  title: 'Hobbies',
  description: 'The other side — outdoors, instruments, chess, and gaming.',
}

export default function HobbiesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="relative text-center mb-16 rounded-2xl overflow-hidden py-16">
        <Aurora intensity="medium" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">Beyond the Code</h1>
          <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
            What I do when I&apos;m not at a keyboard. (Sometimes also at a keyboard.)
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {hobbies.map((hobby, i) => (
          <HobbySection key={hobby.id} hobby={hobby} reverse={i % 2 === 1} />
        ))}
      </div>
    </div>
  )
}
