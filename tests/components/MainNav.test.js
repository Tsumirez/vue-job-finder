import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'
import { describe, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('MainNav', () => {
  it('Displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('Zef Career Finder')
    expect(companyName).toBeInTheDocument()
  })

  it('Lists main nav links', () => {
    render(MainNav)
    const mainNavListItems = screen.getAllByRole('listitem')
    const mainNavTexts = mainNavListItems.map((item) => item.textContent)

    expect(mainNavTexts).toEqual([
      'Teams',
      'Location',
      'Life with us',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })

  describe('When user logs in', () => {
    it("Displays user's picture", async () => {
      render(MainNav)

      let profileImage = screen.queryByRole('img', {
        name: /profile-icon/i
      })

      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })

      await userEvent.click(loginButton)

      profileImage = screen.getByRole('img', {
        name: /profile icon/i
      })

      expect(profileImage).toBeInTheDocument()
    })
  })
})
