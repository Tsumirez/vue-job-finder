import { render, screen } from '@testing-library/vue'

import ActionButton from '@/components/ActionButton.vue'

describe('Action Button', () => {
  it('Renders text', () => {
    render(ActionButton, {
      props: {
        text: 'punch me',
        type: 'primary'
      }
    })

    const button = screen.getByRole('button', { name: /punch me/i })
    expect(button).toBeInTheDocument()
  })

  it('Applies one of several css styles to button', () => {
    render(ActionButton, {
      props: {
        text: 'punch me',
        type: 'primary'
      }
    })

    const button = screen.getByRole('button', { name: /punch me/i })
    expect(button).toHaveClass('primary')
  })
})
