import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HobbyDetailCard } from '@/components/hobbies/hobby-detail-card'

// Stub out motion so animation doesn't interfere with DOM assertions
vi.mock('motion/react', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}))

const accentColor = 'rgba(16, 185, 129, 0.15)'

describe('HobbyDetailCard — expand variant', () => {
  const detail = {
    id: 'lacrosse',
    icon: 'Trophy',
    label: 'Lacrosse',
    detail: 'Pulled my hamstring five times.',
  }

  it('renders the label', () => {
    render(<HobbyDetailCard detail={detail} accentColor={accentColor} />)
    expect(screen.getByText('Lacrosse')).toBeInTheDocument()
  })

  it('does not show detail text before clicking', () => {
    render(<HobbyDetailCard detail={detail} accentColor={accentColor} />)
    expect(screen.queryByText('Pulled my hamstring five times.')).not.toBeInTheDocument()
  })

  it('shows detail text after clicking', async () => {
    const user = userEvent.setup()
    render(<HobbyDetailCard detail={detail} accentColor={accentColor} />)
    await user.click(screen.getByRole('button'))
    expect(screen.getByText('Pulled my hamstring five times.')).toBeInTheDocument()
  })

  it('hides detail text after clicking twice', async () => {
    const user = userEvent.setup()
    render(<HobbyDetailCard detail={detail} accentColor={accentColor} />)
    const btn = screen.getByRole('button')
    await user.click(btn)
    await user.click(btn)
    expect(screen.queryByText('Pulled my hamstring five times.')).not.toBeInTheDocument()
  })

  it('falls back gracefully when icon name is unknown', () => {
    render(
      <HobbyDetailCard
        detail={{ ...detail, icon: 'NonExistentIcon999' }}
        accentColor={accentColor}
      />
    )
    expect(screen.getByText('Lacrosse')).toBeInTheDocument()
  })
})

describe('HobbyDetailCard — link variant', () => {
  const linkDetail = {
    id: 'challenge',
    icon: 'Sword',
    label: 'Challenge Me',
    href: 'https://www.chess.com/member/carsickyak',
  }

  it('renders as an anchor tag', () => {
    render(<HobbyDetailCard detail={linkDetail} accentColor={accentColor} />)
    const link = screen.getByRole('link', { name: /challenge me/i })
    expect(link).toBeInTheDocument()
  })

  it('has the correct href', () => {
    render(<HobbyDetailCard detail={linkDetail} accentColor={accentColor} />)
    const link = screen.getByRole('link', { name: /challenge me/i })
    expect(link).toHaveAttribute('href', 'https://www.chess.com/member/carsickyak')
  })

  it('opens in a new tab', () => {
    render(<HobbyDetailCard detail={linkDetail} accentColor={accentColor} />)
    const link = screen.getByRole('link', { name: /challenge me/i })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('does not render a button', () => {
    render(<HobbyDetailCard detail={linkDetail} accentColor={accentColor} />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
