import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GitHubStatsCard } from '@/components/home/github-stats-card'

vi.mock('@/server/queries/github', () => ({
  getGitHubProfile: vi.fn().mockResolvedValue({ repos: 15, followers: 42 }),
  getGitHubStars: vi.fn().mockResolvedValue({ stars: 33 }),
}))

vi.mock('@/components/effects/glow-card', () => ({
  GlowCard: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

describe('GitHubStatsCard', () => {
  it('renders total stars', async () => {
    render(await GitHubStatsCard())
    expect(screen.getByText('33')).toBeInTheDocument()
  })

  it('renders repo count', async () => {
    render(await GitHubStatsCard())
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('renders follower count', async () => {
    render(await GitHubStatsCard())
    expect(screen.getByText('42')).toBeInTheDocument()
  })

  it('renders the Stars label', async () => {
    render(await GitHubStatsCard())
    expect(screen.getByText('Stars')).toBeInTheDocument()
  })

  it('renders the Repos label', async () => {
    render(await GitHubStatsCard())
    expect(screen.getByText('Repos')).toBeInTheDocument()
  })

  it('renders the Followers label', async () => {
    render(await GitHubStatsCard())
    expect(screen.getByText('Followers')).toBeInTheDocument()
  })

  it('renders static achievement badges', async () => {
    render(await GitHubStatsCard())
    expect(screen.getByText('Quickdraw')).toBeInTheDocument()
    expect(screen.getByText('Pull Shark')).toBeInTheDocument()
    expect(screen.getByText('YOLO')).toBeInTheDocument()
  })

  it('renders GitHub profile link', async () => {
    render(await GitHubStatsCard())
    expect(screen.getByRole('link', { name: /@Crawford-Young/i })).toHaveAttribute(
      'href',
      'https://github.com/Crawford-Young'
    )
  })
})
