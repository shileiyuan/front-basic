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
// join用来去掉一层嵌套
Maybe.prototype.join = function () {
  // return this.isNothing() ? Maybe.of(null) : this.__value

  // 我可以去掉所有嵌套
  let node = this
  while( node.__value instanceof Maybe) {
    node = node.__value
  }
  return node.isNothing() ? Maybe.of(null) : node.__value
}

var map = R.curry(
  function (f, any_functor_at_all) {
    return any_functor_at_all.map(f)
  }
)

var mmo = R.compose(
  Maybe.of,
  Maybe.of,
  Maybe.of,
)('abc')

console.log(mmo.join())
