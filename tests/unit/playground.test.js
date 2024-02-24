import { describe, it, expect } from 'vitest'
import { evenOrOdd } from '@/playground'

describe('basic math', () => {
  it('Adds two numbers', () => {
    expect(1 + 1).toBe(2)
  })

  describe('Even or Odd', () => {
    describe('If number is even', () => {
      it("Returns result 'even'", () => {
        expect(evenOrOdd(2)).toBe('even')
      })
    })

    describe('If number is odd', () => {
      it("returns result 'odd'", () => {
        expect(evenOrOdd(3)).toBe('odd')
      })
    })
  })
})
