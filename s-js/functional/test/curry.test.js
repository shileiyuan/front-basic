import { word, words, filterQs, max } from '../curry'

describe('function curry', () => {
  it('split word', () => {
    expect(word('forty stone')).toEqual(['forty', 'stone'])
  })

  it('split words list', () => {
    expect(words(['forty stone', 'Jenny abc'])).toEqual([['forty', 'stone'], ['Jenny', 'abc']])
  })
  it('filter arr', () => {
    var arr = ['test', 'quora', 'abqc']
    expect(filterQs(arr)).toEqual(['quora', 'abqc'])
  })

  it('select max number of an array', () => {
    var arr = [7, 5, 9, 2, 3, 6]
    expect(max(arr)).toBe(9)
  })
})
