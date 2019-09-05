const R = require('ramda')

var IO = function (f) {
  this.unsafePerformIO = f;
}

IO.of = function (x) {
  return new IO(() => x)
}

IO.prototype.map = function (f) {
  return new IO(R.compose(f, this.unsafePerformIO))
}
var Maybe = function (x) {
  this.__value = x;
}
Maybe.of = function (x) {
  return new Maybe(x);
}
const window = {
  innerWidth: 1430,
  location: {
    href: 'http://localhost:8000/blog/posts?searchTerm=abc&name=def'
  }
}

var map = R.curry(
  (f, functor) => functor.map(f)
)

var url = new IO(() => window.location.href)

var toPairs = R.compose(
  map(R.split('=')),
  R.split('&')
)

var params = R.compose(
  toPairs,
  R.last,
  R.split('?')
)

var findParam = function (key) {
  return map(
    R.compose(
      Maybe.of,
      R.filter(R.compose(
        R.equals(key),
        R.head
      )),
      params
    ),
    url
  )
}


var res = findParam('searchTerm').unsafePerformIO()

console.log(res)
