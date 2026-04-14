import { describe, it, expect } from 'vitest'
import { projects } from '@/data/projects'
import { workExperience, education } from '@/data/experience'
import { hobbies } from '@/data/hobbies'

describe('projects', () => {
  it('has 7 projects', () => expect(projects).toHaveLength(7))
  it('each project has slug, title, description, tech[]', () => {
    for (const p of projects) {
      expect(p.slug).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(p.description).toBeTruthy()
      expect(Array.isArray(p.tech)).toBe(true)
    }
  })
})

describe('experience', () => {
  it('first work entry is Aderant', () => expect(workExperience[0].company).toBe('Aderant'))
  it('has education entries', () => expect(education.length).toBeGreaterThan(0))
  it('first education entry is Auburn University', () => expect(education[0].institution).toBe('Auburn University'))
})

describe('hobbies', () => {
  it('has 4 hobbies', () => expect(hobbies).toHaveLength(4))
  it('each hobby has id, title, description, accentColor', () => {
    for (const h of hobbies) {
      expect(h.id).toBeTruthy()
      expect(h.title).toBeTruthy()
      expect(h.description).toBeTruthy()
      expect(h.accentColor).toBeTruthy()
    }
  })
})
