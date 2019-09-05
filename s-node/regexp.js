// 从一个字符串中提取子串
// var str = '[[1]Frame,[0]Linear,[2]Frame,[0]Linear,[0]Relative,[0]Frame]'
// var regex = /\[(\d)\]/;  // 加上/g才可以用while
// var arr = [];
// var result;
// while((result = regex.exec(str)) !== null) {
//   arr.push(result[1])
// }
// console.log(arr.join())

// console.log(regex.exec(str))
// console.log(regex.exec(str))

var results = '11111 puls 2 equals 3'.match(/\d+/g)
console.log(results)
