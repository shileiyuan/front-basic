import R from 'ramda'

var head = function (x) { return x[0]; }
var reverse = R.reduce((acc, x) => [x].concat(acc), [])

var last = R.compose(head, reverse)

export { last }
