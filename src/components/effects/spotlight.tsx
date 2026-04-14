'use client'

import { useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { usePrefersReducedMotion } from '@/lib/motion'

interface SpotlightProps {
  children: React.ReactNode
  className?: string
}

export function Spotlight({ children, className }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--sx', `${e.clientX - rect.left}px`)
    ref.current.style.setProperty('--sy', `${e.clientY - rect.top}px`)
  }, [reduced])

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={cn('relative overflow-hidden', className)}
      style={{ '--sx': '50%', '--sy': '50%' } as React.CSSProperties}
    >
      {!reduced && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(700px circle at var(--sx) var(--sy), rgba(16,185,129,0.07), transparent 50%)',
          }}
        />
      )}
      {children}
    </div>
  )
}
