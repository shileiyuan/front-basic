var R = require('ramda')

var Maybe = function (x) {
  this.__value = x;
}
Maybe.of = function (x) {
  return new Maybe(x);
}
Maybe.prototype.isNothing = function () {
  return (this.__value === null || this.__value === undefined);
}
Maybe.prototype.map = function (f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}

Maybe.prototype.join = function() {
  return this.isNothing() ? Maybe.of(null) : this.__value
}

var map = R.curry(
  function (f, any_functor_at_all) {
    return any_functor_at_all.map(f)
  }
)

var safeHead = function (xs) {
  return Maybe.of(xs[0])
}

var streetName = R.compose(
  map(R.prop('steet')),
  safeHead,
  R.prop('address')
)

var res = streetName({ address: [{ steet: 'Shady Ln', number: 4201 }] })

console.log(res)

// b -> (a => b) -> Maybe a -> b
var maybe = R.curry(function (x, f, m) {
  return m.isNothing() ? x : f(m.__value)
})


var chain = R.curry(function (f, m) {
  return m.map(f).join();
})
