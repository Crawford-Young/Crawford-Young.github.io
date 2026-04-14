import type { Hobby } from '@/types'

export const hobbies: Hobby[] = [
  {
    id: 'outdoors',
    title: 'Outdoors',
    description: 'Hiking, camping, and being out in nature whenever possible. Spent summers at Camp Rockmont in the Blue Ridge Mountains — that love for the outdoors never left.',
    accentColor: 'rgba(16, 185, 129, 0.12)',
  },
  {
    id: 'instruments',
    title: 'Playing Instruments',
    description: 'Started with band in high school and it stuck. Music is the best kind of debugging — patient, iterative, and the feedback loop is immediate.',
    accentColor: 'rgba(99, 102, 241, 0.12)',
  },
  {
    id: 'chess',
    title: 'Chess',
    description: 'Competitive since high school. Chess sharpened my thinking in ways that transferred directly to software — pattern recognition, planning ahead, and knowing when to sacrifice for position.',
    accentColor: 'rgba(245, 158, 11, 0.12)',
  },
  {
    id: 'gaming',
    title: 'Video Games',
    description: 'Games got me into programming. Taking apart how a game works — the systems, the feedback loops, the UX — is still one of my favourite ways to think about product design.',
    accentColor: 'rgba(236, 72, 153, 0.12)',
  },
]
