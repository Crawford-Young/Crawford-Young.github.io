import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { usePrefersReducedMotion } from '@/lib/motion'

function mockMatchMedia(matches: boolean) {
  const listeners: ((e: MediaQueryListEvent) => void)[] = []
  const mq = {
    matches,
    addEventListener: vi.fn((_event: string, handler: (e: MediaQueryListEvent) => void) => {
      listeners.push(handler)
    }),
    removeEventListener: vi.fn(),
  }
  vi.stubGlobal('matchMedia', vi.fn(() => mq))
  return { mq, listeners }
}

beforeEach(() => {
  vi.unstubAllGlobals()
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('usePrefersReducedMotion', () => {
  it('returns false when prefers-reduced-motion is not set', () => {
    mockMatchMedia(false)
    const { result } = renderHook(() => usePrefersReducedMotion())
    expect(result.current).toBe(false)
  })

  it('returns true when prefers-reduced-motion is set', () => {
    mockMatchMedia(true)
    const { result } = renderHook(() => usePrefersReducedMotion())
    expect(result.current).toBe(true)
  })

  it('updates when media query changes', () => {
    const { listeners } = mockMatchMedia(false)
    const { result } = renderHook(() => usePrefersReducedMotion())
    expect(result.current).toBe(false)
    act(() => {
      listeners.forEach(l => l({ matches: true } as MediaQueryListEvent))
    })
    expect(result.current).toBe(true)
  })

  it('removes the event listener on unmount', () => {
    const { mq } = mockMatchMedia(false)
    const { unmount } = renderHook(() => usePrefersReducedMotion())
    unmount()
    expect(mq.removeEventListener).toHaveBeenCalledOnce()
  })
})
