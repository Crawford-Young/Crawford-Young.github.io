import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import HobbiesPage from '@/app/hobbies/page'

vi.mock('@/components/effects/aurora', () => ({ Aurora: () => null }))
vi.mock('motion/react', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}))

describe('HobbiesPage', () => {
  it('renders heading', () => {
    render(<HobbiesPage />)
    expect(screen.getByRole('heading', { name: /beyond the code/i })).toBeInTheDocument()
  })

  it('renders all 5 hobbies', () => {
    render(<HobbiesPage />)
    expect(screen.getByRole('heading', { name: 'Outdoors' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Playing Instruments' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Chess' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Video Games' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Writing & Philosophy' })).toBeInTheDocument()
  })

  it('renders detail cards for a hobby', () => {
    render(<HobbiesPage />)
    expect(screen.getByText('Lacrosse')).toBeInTheDocument()
    expect(screen.getByText('5 Instruments')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /challenge me/i })).toBeInTheDocument()
  })

  it('renders hobby photos', () => {
    render(<HobbiesPage />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBeGreaterThanOrEqual(4)
  })
})
