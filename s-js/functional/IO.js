const R = require('ramda')

var IO = function (f) {
  this.__value = f;
}

IO.of = function (x) {
  return new IO(() => x)
}

IO.prototype.map = function (f) {
  return new IO(R.compose(f, this.__value))
}

// IO 把一个非纯动作包裹到函数中，目的是延迟执行这个非纯动作
// IO 包含的是被包裹的执行动作的返回值，而不是包裹函数本身

const window = {
  innerWidth: 1430,
  location: {
    href: 'http://localhost:8000/blog/posts'
  }
}

var io_window = new IO(() => window)

var res1 = io_window.map(win => win.innerWidth)

var res2 = io_window.map(R.prop('location')).map(R.prop('href')).map(R.split('/'));

console.log(res1.__value())
console.log(res2.__value())

// var map = R.curry(
//   function (f, any_functor_at_all) {
//     return any_functor_at_all.map(f)
//   }
// )

// var url = new IO(() => window.location.href)

// var toPairs = R.compose(
//   map(R.split('=')),
//   R.split('&')
// )

var chain = R.curry((f, m) => m.map(f).join())
// 返回的如果是普通值就用map，如果是functor就用chain


