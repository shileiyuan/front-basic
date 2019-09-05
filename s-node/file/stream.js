// 用stream来拷贝文件

var fs = require('fs')
var path = require('path')

const readPath = '/Users/ysl/Movies/教父2.rmvb'
var rs = fs.createReadStream(readPath)  // default highWaterMark of 64 kb
var ws = fs.createWriteStream(path.basename(readPath), { highWaterMark: 16 * 1024 })

var start = new Date().getTime()
rs.on('data', function (chunk) {
  // console.log(chunk.length)
  var flag = ws.write(chunk)
  if (flag === false) {
    // console.log('pause')
    rs.pause()
  }
})
ws.on('drain', function () {
  // console.log('drain')
  rs.resume()
})

rs.on('end', function () {
  ws.end()
  var end = new Date().getTime()
  console.log('用时', end - start, 'ms')
})



// rs.pipe(ws)
// rs.on('end', function () {
//   var end = new Date().getTime()
//   console.log('用时', end - start, 'ms')
// })

// 用时 14402 ms  用时 6947 ms
// 用时 6776 ms
// 用时 3855 ms  用时 4659 ms