const pathToRegexp = require('path-to-regexp')
var keys = []
var re = pathToRegexp('/Foo/:Bar', keys)
console.log(keys)
console.log(re)

var a = /^\/foo\/([^\/]+?)(?:\/)?$/i