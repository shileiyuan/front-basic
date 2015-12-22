/*
 * apply方法
 */

// 定义函数
var sayHi = function(who) {
	return "Hello" + (who ? ", " + who : "") + "!";
};

// 调用函数
console.log(sayHi()); // "Hello"
console.log(sayHi('world')); // "Hello, world!"

// 应用函数
console.log(sayHi.apply(null, [ "hello" ])); // "Hello, hello!"

// 从上面的例子中可以看出来，调用一个函数和应用一个函数有相同的结果。
// apply()接受两个参数：第一个是在函数内部绑定到this上的对象，第二个是一个参数数组，
// 参数数组会在函数内部变成一个类似数组的arguments对象。
// 如果第一个参数为null，那么this将指向全局对象，
// 这正是当你调用一个函数（且这个函数不是某个对象的方法）时发生的事情。



//当一个函数是一个对象的方法时，我们不再像前面的例子一样传入null。
var alien = {
	sayHi : function(who) {
		return "Hello" + (who ? ", " + who : "") + "!";
	}
};

console.log(alien.sayHi('world')); // "Hello, world!"
console.log(sayHi.apply(alien, [ "humans" ])); // "Hello, humans!"
//console.log(alien.sayHi.apply(alien, [ "humans" ])); // "Hello, humans!"

