import { render, screen } from '@testing-library/vue'
import HeroHeadline from '@/components/HeroHeadline.vue'
import { beforeEach, expect } from 'vitest'
import { nextTick } from 'vue'

describe('The HeroHeadline', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('Displays introductory action verb', () => {
    render(HeroHeadline)

    const actionPhrase = screen.getByRole('heading', {
      name: /Design and get paid for your genius/i
    })

    expect(actionPhrase).toBeInTheDocument()
  })

  it('changes action verb at intervals', () => {
    const mock = vi.fn()
    vi.stubGlobal('setInterval', mock)
    render(HeroHeadline)

    expect(mock).toHaveBeenCalled()
  })

  it('swaps action verb after interval', async () => {
    render(HeroHeadline)
    vi.advanceTimersToNextTimer()

    await nextTick()

    const actionPhrase = screen.getByRole('heading', {
      name: /Build and get paid for your genius/i
    })

    expect(actionPhrase).toBeInTheDocument()
  })

  it('removes interval when component is destroyed', () => {
    const clearInterval = vi.fn()
    vi.stubGlobal('clearInterval', clearInterval)

    const { unmount } = render(HeroHeadline)
    unmount()
    expect(clearInterval).toHaveBeenCalled()
    vi.unstubAllGlobals()
  })
})
