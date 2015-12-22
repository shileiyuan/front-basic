/*
 * 函数重定义
 */
var scareMe = function () {
    console.log("Boo!");
//    如果将你定义的函数赋值给已经存在的函数变量的话，则新函数会覆盖旧函数。
    scareMe = function () {
        console.log("Double boo!");
    };
};
// 使用重定义函数
scareMe(); // Boo!
scareMe(); // Double boo!

