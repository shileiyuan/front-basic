var fs = require('fs')
fs.watch('./abc.txt', (eventType, fileName) => {
  console.log(eventType, fileName)
})