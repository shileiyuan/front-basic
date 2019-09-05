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

Maybe.prototype.join = function () {
  return this.isNothing() ? Maybe.of(null) : this.__value
}

Maybe.prototype.ap = function(other_container) {
  return other_container.map(this.__value)
}

const result = Maybe.of(R.add).ap(Maybe.of(2)).ap(Maybe.of(3))

console.log(result)
