import type { Hobby } from '@/types'

export const hobbies: Hobby[] = [
  {
    id: 'outdoors',
    title: 'Outdoors',
    description:
      'Hiking, camping, and being out in nature whenever possible. Spent summers at Camp Rockmont in the Blue Ridge Mountains — that love for the outdoors never left.',
    accentColor: 'rgba(16, 185, 129, 0.15)',
    photo: '/outdoors.jpeg',
    details: [
      {
        id: 'lacrosse',
        icon: 'Trophy',
        label: 'Lacrosse',
        detail:
          'Played all four years of high school. Pulled my hamstring five times across junior and senior year — five times.',
      },
      {
        id: 'volleyball',
        icon: 'Users',
        label: 'Club Volleyball',
        detail:
          'Played club volleyball at Auburn for a year. Served as a reasonable excuse to still pretend to be athletic.',
      },
      {
        id: 'kayak',
        icon: 'Waves',
        label: 'Kayak & Canoe Instructor',
        detail:
          'White water kayak and canoe instructor at Camp Rockmont in the Blue Ridge Mountains. Spent summers teaching kids not to flip.',
      },
      {
        id: 'vickery',
        icon: 'TreePine',
        label: 'Vickery Creek',
        detail:
          'Favourite park in Atlanta so far. Waterfalls, trails, enough elevation to feel like a real hike.',
      },
    ],
  },
  {
    id: 'instruments',
    title: 'Playing Instruments',
    description:
      'Started with band in high school and it stuck. Music is the best kind of debugging — patient, iterative, and the feedback loop is immediate.',
    accentColor: 'rgba(99, 102, 241, 0.15)',
    photo: '/instruments.JPG',
    details: [
      {
        id: 'five',
        icon: 'Music',
        label: '5 Instruments',
        detail:
          'Piano, guitar, ukulele, harmonica, and trumpet. Each one feels like a different dialect of the same language.',
      },
      {
        id: 'trumpet',
        icon: 'Mic2',
        label: 'Trumpet Era',
        detail:
          'Played trumpet all through high school — marching band, concert band, jazz ensemble. Still the loudest thing I own.',
      },
      {
        id: 'guitar',
        icon: 'Guitar',
        label: 'Guitar Deep Dive',
        detail:
          "Two years ago I really got into guitar. It's the one that stuck the hardest. The others are catching up.",
      },
      {
        id: 'others',
        icon: 'Sparkles',
        label: 'The Others',
        detail:
          'Piano, uke, and harmonica are all in various states of being re-learned. Progress is non-linear.',
      },
    ],
  },
  {
    id: 'chess',
    title: 'Chess',
    description:
      'Competitive since high school. Chess sharpened my thinking in ways that transferred directly to software — pattern recognition, planning ahead, and knowing when to sacrifice for position.',
    accentColor: 'rgba(245, 158, 11, 0.15)',
    photo: '/chess.png',
    details: [
      {
        id: 'elo',
        icon: 'BarChart2',
        label: '1400 ELO',
        detail:
          "Rapid rating — and I genuinely don't deserve it. My opening book is embarrassing and I play too fast. Working on it.",
      },
      {
        id: 'challenge',
        icon: 'Sword',
        label: 'Challenge Me',
        href: 'https://www.chess.com/member/carsickyak',
      },
    ],
  },
  {
    id: 'gaming',
    title: 'Video Games',
    description:
      'Games got me into programming. Taking apart how a game works — the systems, the feedback loops, the UX — is still one of my favourite ways to think about product design.',
    accentColor: 'rgba(236, 72, 153, 0.15)',
    photo: '/gaming.JPG',
    details: [
      {
        id: 'rl',
        icon: 'Rocket',
        label: 'Rocket League',
        detail:
          "Grand Champion. Mechanically the most demanding game I've played — and I can't stop.",
      },
      {
        id: 'val',
        icon: 'Crosshair',
        label: 'Valorant',
        detail:
          'Ascendant. Mostly play duelists. My aim is fine; my game sense needs work.',
      },
      {
        id: 'ow',
        icon: 'Shield',
        label: 'Overwatch',
        detail:
          "Diamond. I main support when the team needs it, DPS when it doesn't.",
      },
      {
        id: 'indie',
        icon: 'Gamepad2',
        label: 'Indie Games',
        detail:
          "A Short Hike, Wanderstop, and anything that proves you don't need a $200M budget to make something special.",
      },
    ],
  },
  {
    id: 'writing',
    title: 'Writing & Philosophy',
    description:
      "Writing is how I process things. Philosophy is why I think it matters. Camus in particular — absurdism as optimism rather than despair.",
    accentColor: 'rgba(168, 85, 247, 0.15)',
    photo: '/profilePic.jpg',
    details: [
      {
        id: 'stories',
        icon: 'BookOpen',
        label: 'Short Stories & Poems',
        detail:
          'Short fiction, poems — whatever fits the feeling. I like writing things that are too specific to be made up.',
      },
      {
        id: 'philosophy',
        icon: 'Feather',
        label: 'Philosophy',
        detail:
          "Camus in particular. Absurdism as optimism — the idea that you build meaning precisely because it isn't given.",
      },
      {
        id: 'camus',
        icon: 'Quote',
        label: 'Favourite Quote',
        detail:
          '"In the midst of winter I found there was within me an invincible summer."',
      },
      {
        id: 'substack',
        icon: 'PenLine',
        label: 'Read My Writing',
        href: 'https://substack.com/@crawfordyoung',
      },
    ],
  },
]
