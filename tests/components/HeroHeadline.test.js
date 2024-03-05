import { render, screen } from '@testing-library/vue'
import HeroHeadline from '@/components/HeroHeadline.vue'
import { expect } from 'vitest'

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
})
