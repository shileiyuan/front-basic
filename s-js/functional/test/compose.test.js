import { last } from '../compose'

describe('functional compose', () => {
  it('reverse array', () => {
    const array = ['jumpkick', 'roundhouse', 'uppercut']
    expect(last(array)).toBe('uppercut')
  })
})
