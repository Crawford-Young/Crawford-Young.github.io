'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Trophy,
  Users,
  Waves,
  TreePine,
  Music,
  Guitar,
  Sparkles,
  BarChart2,
  Sword,
  Rocket,
  Crosshair,
  Shield,
  Gamepad2,
  Mic2,
  BookOpen,
  Feather,
  Quote,
  PenLine,
  ExternalLink,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { HobbyDetail } from '@/types'

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  Users,
  Waves,
  TreePine,
  Music,
  Guitar,
  Sparkles,
  BarChart2,
  Sword,
  Rocket,
  Crosshair,
  Shield,
  Gamepad2,
  Mic2,
  BookOpen,
  Feather,
  Quote,
  PenLine,
  ExternalLink,
}

interface HobbyDetailCardProps {
  detail: HobbyDetail
  accentColor: string
}

export function HobbyDetailCard({ detail, accentColor }: HobbyDetailCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const Icon = ICONS[detail.icon] ?? Music

  const pillClass = cn(
    'inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm text-left',
    'bg-surface/60 transition-colors duration-200',
    'hover:border-border'
  )

  if (detail.href) {
    return (
      <a
        href={detail.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(pillClass, 'border-border/50')}
      >
        <Icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        <span>{detail.label}</span>
        <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground/60" />
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setIsOpen((v) => !v)}
      className={cn(pillClass, 'flex-col items-start')}
      style={{ borderColor: isOpen ? accentColor : undefined }}
      aria-expanded={isOpen}
    >
      <span className="flex items-center gap-1.5">
        <Icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        <span>{detail.label}</span>
      </span>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-xs text-muted-foreground pt-2 leading-relaxed text-left">
              {detail.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
