'use client'

import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/lib/motion'

interface CountUpProps {
  to: number
  suffix?: string
  duration?: number
  className?: string
}

export function CountUp({ to, suffix = '', duration = 1400, className }: CountUpProps) {
  const [value, setValue] = useState(to)
  const reduced = usePrefersReducedMotion()
  const started = useRef(false)
  const elRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (reduced || started.current) return
    let rafId = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        observer.disconnect()
        const t0 = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setValue(Math.round(eased * to))
          if (p < 1) rafId = requestAnimationFrame(tick)
        }
        setValue(0)
        rafId = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    if (elRef.current) observer.observe(elRef.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [to, duration, reduced])

  return <span ref={elRef} className={className}>{value}{suffix}</span>
}
