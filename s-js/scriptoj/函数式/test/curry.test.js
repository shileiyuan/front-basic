import curry from '../curry'

describe('curry', () => {
  it('curry functions', () => {
    function sum(a, b, c, d) {
      return a + b + c + d
    }

    const currySum = curry(sum)
    expect(currySum(2)(3)(5, 6)).toBe(16)
  })

  it('curry more than one time', () => {
    const add = curry((a, b) => a + b)
    const add1 = add(1)
    expect(add1(1)).toBe(2)
    expect(add1(2)).toBe(3)
  })
})
