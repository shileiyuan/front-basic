
/*
 * this：和变量不同，关键字this没有作用域的限制，嵌套的函数不会从调用它的函数继承this。
 * 如果嵌套函数作为方法调用，其this值指向调用它的对象
 * 如果嵌套函数作为函数调用，其this值是全局对象(非严格模式下)或者undefined（严格模式下）
 */
"use strict"
var o = {
		m: function(){
			var self = this;
			console.log(this === o);// true
			f();
			function f(){
				console.log(this === o); //false;
				console.log(this); //全局对象，node下输出一大堆
				console.log(self === o); //true
			}
		}
		
}
o.m();



