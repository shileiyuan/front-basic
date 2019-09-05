import pipe from '../pipe'

describe('pipe', () => {
  it('pipe from left to right', () => {
    const double = x => x * 2
    const square = x => x * x
    const add1 = x => x + 1
    expect(pipe(square)(5)).toBe(25)
    expect(
      pipe(add1, square)(5)
    ).toBe(36)
    expect(
      pipe(
        double,
        square,
        double
      )(5)
    ).toBe(200)
  })
})
