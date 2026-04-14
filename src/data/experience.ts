import type { WorkExperience, Education } from '@/types'

export const workExperience: WorkExperience[] = [
  {
    id: 'aderant',
    company: 'Aderant',
    role: 'Associate Software Engineer',
    period: 'Dec 2025 – Present',
    location: 'Atlanta, GA · Hybrid',
    type: 'Full-time',
    bullets: [
      'Building AI-powered features and frontend systems for legal practice management software.',
      'Working with Next.js, Python, and internal tooling to accelerate development workflows.',
    ],
  },
  {
    id: 'floqast',
    company: 'FloQast',
    role: 'Software Engineer Intern',
    period: 'Jun 2025 – Aug 2025',
    location: 'Remote',
    type: 'Internship',
    bullets: [
      'Implemented a journal entry management feature categorising entries into a dynamic to-do list, boosting accountants\' efficiency by 200%.',
      'Developed full-stack features using React, TypeScript, Zustand, TanStack Query, and MongoDB integrated with AWS Lambda — supporting 1,000+ accounting teams.',
      'Built interactive dashboards with ApexCharts and Flow UI, improving financial data visibility across multiple reporting cycles.',
      'Conducted peer code reviews and collaborated in Agile sprint planning with a cross-functional team of 12.',
      'Debugged and resolved critical production issues, maintaining SLA compliance for enterprise clients.',
      'Facilitated weekly intern meetings to exchange experiences and strengthen cross-team communication.',
    ],
    stats: [
      { label: 'efficiency boost', value: 200, suffix: '%' },
      { label: 'accounting teams', value: 1000, suffix: '+' },
    ],
  },
  {
    id: 'camp-director',
    company: 'Camp Rockmont for Boys',
    role: 'Tribal Director',
    period: 'May 2024 – Aug 2024',
    location: 'Black Mountain, NC · On-site',
    type: 'Seasonal',
    bullets: [
      'Managed 6+ counselors and mentored 70+ campers across multi-week programmes.',
      'Planned and executed activities for 300+ campers in collaboration with fellow directors.',
    ],
  },
  {
    id: 'camp-counselor',
    company: 'Camp Rockmont for Boys',
    role: 'Camp Counselor',
    period: 'Jun 2023 – Aug 2023',
    location: 'Black Mountain, NC · On-site',
    type: 'Seasonal',
    bullets: [
      'Trained twelve 16+ year-olds in leadership, mentorship, and staff operations.',
    ],
  },
  {
    id: 'pure-taqueria',
    company: 'Pure Taqueria',
    role: 'Food Runner',
    period: 'Jul 2021 – Jul 2022',
    location: 'Atlanta, GA',
    type: 'Part-time',
  },
]

export const education: Education[] = [
  {
    id: 'auburn',
    institution: 'Auburn University',
    degree: 'B.S. Computer Science',
    period: 'Aug 2022 – Dec 2025',
    achievements: ['Summa Cum Laude', 'Honors Scholar', 'Certificate in AI Engineering'],
    activities: [
      'Web Development Club — President',
      'Competitive Programming Team',
      'Ethical Hacking Club',
      'Association for Computing Machinery (ACM)',
      'Honors College',
    ],
  },
  {
    id: 'marist',
    institution: 'Marist School',
    degree: 'High School Diploma',
    period: 'Aug 2016 – May 2022',
    activities: ['Lacrosse', 'Robotics', 'Band', 'Sign Language Club', 'Chess Club'],
  },
]
