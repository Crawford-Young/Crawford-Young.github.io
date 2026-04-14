import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PillNav } from '@/components/layout/nav'

vi.mock('next/navigation', () => ({ usePathname: () => '/' }))

describe('PillNav', () => {
  it('renders all 5 nav links', () => {
    render(<PillNav />)
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Projects' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Hobbies' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Experience' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Contact' }).length).toBeGreaterThan(0)
  })
})
