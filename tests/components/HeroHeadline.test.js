import { render, screen } from '@testing-library/vue'
import HeroHeadline from '@/components/HeroHeadline.vue'
import { expect } from 'vitest'
import { nextTick } from 'vue'

describe('The HeroHeadline', () => {
  it('Displays introductory action verb', () => {
    vi.useFakeTimers()
    render(HeroHeadline)

    const actionPhrase = screen.getByRole('heading', {
      name: /Design and get paid for your genius/i
    })

    expect(actionPhrase).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('changes action verb at intervals', () => {
    vi.useFakeTimers()
    const mock = vi.fn()
    vi.stubGlobal('setInterval', mock)
    render(HeroHeadline)

    expect(mock).toHaveBeenCalled()
    vi.useRealTimers()
  })

  it('swaps action verb after interval', async () => {
    vi.useFakeTimers()
    render(HeroHeadline)
    vi.advanceTimersToNextTimer()

    await nextTick()

    const actionPhrase = screen.getByRole('heading', {
      name: /Build and get paid for your genius/i
    })

    expect(actionPhrase).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('removes interval when component is destroyed', () => {
    vi.useFakeTimers()
    const clearInterval = vi.fn()
    vi.stubGlobal('clearInterval', clearInterval)

    const { unmount } = render(HeroHeadline)
    unmount()
    expect(clearInterval).toHaveBeenCalled()
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })
})
