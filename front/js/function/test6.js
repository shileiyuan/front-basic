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

//1. 添加一个新属性
scareMe.property = "properly";

// 2. 被赋值给一个不同名的变量
var prank = scareMe;

// 3. 作为方法使用
var spooky = {
    boo: scareMe
};

// 使用新名字调用
prank(); // "Boo!"
prank(); // "Boo!"
console.log(prank.property); // "properly"

// 作为方法调用
spooky.boo(); // "Boo!"
spooky.boo(); // "Boo!"
console.log(spooky.boo.property);   // "properly"

// 使用重定义函数
scareMe(); // Double boo!
scareMe(); // Double boo!
console.log(scareMe.property); // undefined