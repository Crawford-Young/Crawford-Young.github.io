import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/layout/footer'

describe('Footer', () => {
  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Crawford Young/)).toBeInTheDocument()
  })
  it('has GitHub link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/Crawford-Young')
  })
  it('has LinkedIn link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', 'https://www.linkedin.com/in/crawford-young/')
  })
})
