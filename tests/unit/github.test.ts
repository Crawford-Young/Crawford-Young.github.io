import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getGitHubProfile, getGitHubStars } from '@/server/queries/github'

const mockFetch = vi.fn()
vi.stubGlobal('fetch', mockFetch)

describe('getGitHubProfile', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    process.env.GITHUB_TOKEN = 'test-token'
  })

  it('calls the correct URL with an Authorization header', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ public_repos: 15, followers: 42 }),
    })
    await getGitHubProfile()
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.github.com/users/Crawford-Young',
      expect.objectContaining({
        headers: expect.objectContaining({ Authorization: 'Bearer test-token' }),
        next: { revalidate: 3600 },
      })
    )
  })

  it('returns repos and followers mapped from the API response', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ public_repos: 15, followers: 42 }),
    })
    const result = await getGitHubProfile()
    expect(result).toEqual({ repos: 15, followers: 42 })
  })
})

describe('getGitHubStars', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    process.env.GITHUB_TOKEN = 'test-token'
  })

  it('calls the correct URL with an Authorization header', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    })
    await getGitHubStars()
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.github.com/users/Crawford-Young/repos?per_page=100',
      expect.objectContaining({
        headers: expect.objectContaining({ Authorization: 'Bearer test-token' }),
        next: { revalidate: 3600 },
      })
    )
  })

  it('sums stargazers_count across all repos', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        { stargazers_count: 10 },
        { stargazers_count: 23 },
        { stargazers_count: 0 },
      ],
    })
    const result = await getGitHubStars()
    expect(result).toEqual({ stars: 33 })
  })

  it('returns zero stars when the repo list is empty', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    })
    const result = await getGitHubStars()
    expect(result).toEqual({ stars: 0 })
  })
})
