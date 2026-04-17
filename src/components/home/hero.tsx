import Image from 'next/image'
import { SplitText } from '@/components/effects/split-text'
import { Aurora } from '@/components/effects/aurora'

export function Hero() {
  return (
    <section className="-mt-16 md:-mt-20 relative min-h-screen overflow-hidden flex flex-col">
      <Aurora intensity="subtle" />

      {/* Fine grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Nav clearance — pushes content below the fixed nav */}
      <div className="relative z-10 shrink-0 h-16 md:h-20" aria-hidden="true" />

      {/* Content centered in the remaining viewport space */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 gap-7 py-12">
        {/* Avatar */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-1 ring-border shadow-2xl shadow-black/50">
          <Image
            src="/profilePic.jpg"
            alt="Crawford Young"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.04em] text-foreground leading-none">
          <SplitText text="Crawford Young" />
        </h1>

        {/* Role */}
        <p className="text-base md:text-lg text-muted-foreground font-medium">
          AI & Software Engineer <span className="text-accent">@ Aderant</span>
        </p>

        {/* Tagline */}
        <p className="max-w-sm text-sm text-muted-foreground/80 leading-relaxed">
          Building practical products at the intersection of modern web development and AI-driven
          workflows.
        </p>
      </div>
    </section>
  )
}
