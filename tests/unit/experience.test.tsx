import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ExperiencePage from '@/app/experience/page'

vi.mock('@/components/effects/count-up', () => ({
  CountUp: ({ to, suffix }: { to: number; suffix?: string }) => <span>{to}{suffix}</span>,
}))

describe('ExperiencePage', () => {
  it('renders heading', () => {
    render(<ExperiencePage />)
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument()
  })
  it('renders Aderant', () => {
    render(<ExperiencePage />)
    expect(screen.getByText('Aderant')).toBeInTheDocument()
  })
  it('renders FloQast', () => {
    render(<ExperiencePage />)
    expect(screen.getByText('FloQast')).toBeInTheDocument()
  })
  it('renders Auburn University', () => {
    render(<ExperiencePage />)
    expect(screen.getByText('Auburn University')).toBeInTheDocument()
  })
  it('renders FloQast impact stats', () => {
    render(<ExperiencePage />)
    expect(screen.getAllByText(/200%/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/1000\+/).length).toBeGreaterThan(0)
  })
})
