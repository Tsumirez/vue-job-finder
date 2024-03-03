import { render, screen } from '@testing-library/vue'
import SubNav from '@/components/SubNav.vue'
import { describe, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('SubNav', () => {
  describe('When user is on jobs page', () => {
    it('displays the job count', () => {
      render(SubNav, {
        data() {
          return { onJobResultsPage: true }
        }
      })

      const jobCount = screen.getByText('864')
      expect(jobCount).toBeInTheDocument()
    })
  })

  describe('When user is not on jobs page', () => {
    it('Does not display job count', () => {
      render(SubNav, {
        data() {
          return { onJobResultsPage: false }
        }
      })

      const jobCount = screen.queryByText('864')
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
