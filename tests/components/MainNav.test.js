import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'
import { describe } from 'vitest'

describe('MainNav', () => {
  it('Displays company name', () => {
    render(MainNav)
    screen.debug()
  })
})
