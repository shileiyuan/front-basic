import { bubbleSort1 } from '../bubbleSort'

describe('sort', () => {
  it('bubbleSort1', () => {
    const a = [2, 7, 1, 5, 4, 3, 6];
    expect(bubbleSort1(a)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})
