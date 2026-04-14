export type Project = {
  slug: string
  title: string
  description: string
  tech: string[]
  url?: string
  repo?: string
}

export type WorkExperience = {
  id: string
  company: string
  role: string
  period: string
  location: string
  type: string
  bullets?: string[]
  stats?: { label: string; value: number; suffix: string }[]
}

export type Education = {
  id: string
  institution: string
  degree: string
  period: string
  achievements?: string[]
  activities?: string[]
}

export type Hobby = {
  id: string
  title: string
  description: string
  accentColor: string
}
