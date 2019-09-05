// import R from 'ramda'
var R = require('ramda')

const trace = message => R.tap(data => console.log(message, data))

describe('trace', () => {
  it('trace test', () => {
    var dasherize = R.compose(
      R.join('-'),
      R.map(R.toLower),
      // R.tap(console.log),
      trace('after split'),
      R.split(' '),
      R.replace(/\s{2, }/ig, ' ')
    )

    const result = dasherize('The world is a vampire')
    // expect(result).toBe('the-world-is-a-vampire')
  })
})

