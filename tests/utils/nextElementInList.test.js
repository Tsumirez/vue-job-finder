import nextElementInList from '@/utils/nextElementInList'

describe('nextElementInList', () => {
  it('locates element in list and returns next element', () => {
    let list = [1, 2, 3, 4, 5]
    let value = 3

    let result = nextElementInList(list, value)
    expect(result).toBe(4)
  })

  it('lists the first element of the list if passed last one as input', () => {
    let list = [1, 2, 3, 4, 5]
    let value = 5

    let result = nextElementInList(list, value)
    expect(result).toBe(1)
  })
})
