'use client'

import { cn } from '@/lib/utils'
import { usePrefersReducedMotion } from '@/lib/motion'

type AuroraColor = 'emerald' | 'indigo' | 'amber' | 'pink'
type AuroraIntensity = 'subtle' | 'medium' | 'strong'

const COLOR_MAP: Record<AuroraColor, [string, string, string]> = {
  emerald: ['16,185,129', '5,150,105', '16,185,129'],
  indigo: ['99,102,241', '79,70,229', '99,102,241'],
  amber: ['245,158,11', '217,119,6', '245,158,11'],
  pink: ['236,72,153', '219,39,119', '236,72,153'],
}

const OPACITY_MAP: Record<AuroraIntensity, { a: string; b: string; c: string }> = {
  subtle: { a: '0.12', b: '0.07', c: '0.05' },
  medium: { a: '0.20', b: '0.12', c: '0.08' },
  strong: { a: '0.30', b: '0.18', c: '0.12' },
}

interface AuroraProps {
  className?: string
  color?: AuroraColor
  intensity?: AuroraIntensity
}

export function Aurora({ className, color = 'emerald', intensity = 'subtle' }: AuroraProps) {
  const reduced = usePrefersReducedMotion()
  const [c1, c2, c3] = COLOR_MAP[color]
  const { a, b, c } = OPACITY_MAP[intensity]

  return (
    <div
      className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}
      aria-hidden="true"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(${c1},${a}), transparent),
            radial-gradient(ellipse 50% 40% at 20% 60%, rgba(${c2},${b}), transparent),
            radial-gradient(ellipse 50% 40% at 80% 40%, rgba(${c3},${c}), transparent)
          `,
          animation: reduced ? 'none' : 'cy-aurora 12s ease-in-out infinite alternate',
        }}
      />
      {!reduced && (
        <style>{`
          @keyframes cy-aurora {
            0%   { transform: scale(1) translate(0,0); }
            33%  { transform: scale(1.05) translate(-2%,1%); }
            66%  { transform: scale(0.98) translate(2%,-1%); }
            100% { transform: scale(1.02) translate(-1%,2%); }
          }
        `}</style>
      )}
    </div>
  )
}
