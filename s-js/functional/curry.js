import R from 'ramda'

var word = R.split(' ')

var words = R.map(word)


var filterQs = R.filter(R.test(/q/i))


var _keepHighest = function (x, y) { return x >= y ? x : y; };

var max = R.reduce(_keepHighest, -Infinity)

export {
  word, words, filterQs, max
}
