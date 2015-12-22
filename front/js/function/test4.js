/*
 * 简单的闭包
 */
var setup = function () {
    var count = 0;
    return function () {
        return (count += 1);
    };
};

var next = setup(); //setup返回的是一个方法，所以next是一个方法
console.log(next);  //[Function]
var count;
count = next();   //next返回的是一个整数
console.log(count);  //1

count = next();
console.log(count); //2