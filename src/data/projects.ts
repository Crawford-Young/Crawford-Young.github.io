import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'component-library',
    title: '@cy/ui Component Library',
    description: 'Production-quality React component library built on Radix UI primitives, styled with Tailwind CSS and CVA. Wave 1 ships 10 fully-tested, accessible components.',
    tech: ['React', 'TypeScript', 'Radix UI', 'Storybook', 'CVA'],
    repo: 'https://github.com/Crawford-Young/cy-ui',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Personal website built with Next.js 15, @cy/ui, and framer-motion effects. Deployed to GitHub Pages via static export.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    url: 'https://crawford-young.github.io',
    repo: 'https://github.com/Crawford-Young/Crawford-Young.github.io',
  },
  {
    slug: 'web-dev-club',
    title: 'Web Dev Weekly Projects',
    description: 'Weekly project challenges for the Auburn University Web Development Club.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/Crawford-Young/WebDev',
  },
  {
    slug: 'ai-chess-bot',
    title: 'Chess Puzzle Generator',
    description: 'AI that analyses player game history and assigns personalised puzzles targeting each player\'s weaknesses.',
    tech: ['Python', 'AI/ML'],
    repo: 'https://github.com/Crawford-Young/ChessBot',
  },
  {
    slug: 'instrument-tuner',
    title: 'Instrument Tuner',
    description: 'Real-time instrument tuner that detects pitch from microphone input and displays accurate tuning feedback.',
    tech: ['Python', 'Audio Processing'],
    repo: 'https://github.com/Crawford-Young/InstrumentTuner',
  },
  {
    slug: 'ai-pacman',
    title: 'AI Pacman',
    description: 'Pacman with AI agents using search algorithms and reinforcement learning for autonomous play.',
    tech: ['Python', 'AI/ML'],
  },
  {
    slug: 'html-idle-game',
    title: 'HTML Idle Game',
    description: 'Browser-based incremental game built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
]
