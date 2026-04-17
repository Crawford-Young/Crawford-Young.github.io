const GITHUB_USER = 'Crawford-Young'
const BASE_URL = 'https://api.github.com'

function authHeaders() {
  return {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
  }
}

export async function getGitHubProfile(): Promise<{ repos: number; followers: number }> {
  const res = await fetch(`${BASE_URL}/users/${GITHUB_USER}`, {
    headers: authHeaders(),
    next: { revalidate: 3600 },
  })
  const data = (await res.json()) as { public_repos: number; followers: number }
  return { repos: data.public_repos, followers: data.followers }
}

export async function getGitHubStars(): Promise<{ stars: number }> {
  const res = await fetch(`${BASE_URL}/users/${GITHUB_USER}/repos?per_page=100`, {
    headers: authHeaders(),
    next: { revalidate: 3600 },
  })
  const repos = (await res.json()) as { stargazers_count: number }[]
  return { stars: repos.reduce((sum, r) => sum + r.stargazers_count, 0) }
}
