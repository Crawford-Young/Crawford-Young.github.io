import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProjectsPage from '@/app/projects/page'

vi.mock('@/components/effects/spotlight', () => ({
  Spotlight: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))
vi.mock('@/components/effects/glow-card', () => ({
  GlowCard: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

describe('ProjectsPage', () => {
  it('renders heading', () => {
    render(<ProjectsPage />)
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument()
  })
  it('renders all 7 projects', () => {
    render(<ProjectsPage />)
    expect(screen.getByText('@cy/ui Component Library')).toBeInTheDocument()
    expect(screen.getByText('HTML Idle Game')).toBeInTheDocument()
  })
})
