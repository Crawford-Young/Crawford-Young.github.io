import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import HobbiesPage from '@/app/hobbies/page'

vi.mock('@/components/effects/aurora', () => ({ Aurora: () => null }))

describe('HobbiesPage', () => {
  it('renders heading', () => {
    render(<HobbiesPage />)
    expect(screen.getByRole('heading', { name: /beyond the code/i })).toBeInTheDocument()
  })
  it('renders all 4 hobbies', () => {
    render(<HobbiesPage />)
    expect(screen.getByText('Outdoors')).toBeInTheDocument()
    expect(screen.getByText('Playing Instruments')).toBeInTheDocument()
    expect(screen.getByText('Chess')).toBeInTheDocument()
    expect(screen.getByText('Video Games')).toBeInTheDocument()
  })
})
