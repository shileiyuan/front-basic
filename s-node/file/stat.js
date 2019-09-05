var fs = require('fs');

var getTimeDesc = function (d) {
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-') + ' ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
};

fs.stat('./abc.txt', function (err, stats) {
  if(err) throw err
  console.log('是否文件: ' + stats.isFile());
  console.log('是否目录: ' + stats.isDirectory());
  console.log('文件大小: ' + stats.size);
  console.log('创建时间: ' + getTimeDesc(stats.birthtime));
  console.log('访问时间: ' + getTimeDesc(stats.atime));
  console.log('修改时间: ' + getTimeDesc(stats.mtime));
});