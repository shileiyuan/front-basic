var fs = require('fs');
var zlib = require('zlib');



function zip(inFilePath, outFilePath) {
  var gzip = zlib.createGzip();
  var inFile = fs.createReadStream(inFilePath)
  var outFile = fs.createWriteStream(outFilePath)
  inFile.pipe(gzip).pipe(outFile)
} 

// 压缩
zip('./fileForCompress.txt', './fileForCompress.txt.gz')


function gunzip(inFilePath, outFilePath) {
  var gunzip = zlib.createGunzip();
  var inFile = fs.createReadStream(inFilePath)
  var outFile = fs.createWriteStream(outFilePath)
  inFile.pipe(gunzip).pipe(outFile)
}

// 解压缩： 要先执行压缩，再执行解压缩。一起执行会报错
gunzip('./fileForCompress.txt.gz', './fileForCompress2.txt')