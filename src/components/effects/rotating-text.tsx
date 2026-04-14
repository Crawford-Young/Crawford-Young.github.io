'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { usePrefersReducedMotion } from '@/lib/motion'

interface RotatingTextProps {
  items: string[]
  interval?: number
  className?: string
}

export function RotatingText({ items, interval = 2500, className }: RotatingTextProps) {
  const [index, setIndex] = useState(0)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setIndex(i => (i + 1) % items.length), interval)
    return () => clearInterval(id)
  }, [items.length, interval, reduced])

  if (reduced) return <span className={className}>{items[0]}</span>

  return (
    <span className={cn('relative inline-block overflow-hidden', className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          className="block"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
