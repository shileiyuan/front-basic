var name = "The Window";

var object = {
	name : "My Object",
	getNameFunc : function() {
		//如果在严格模式下，下面return方法中的this是未定义的
		//如果不是在严格模式下，则函数上下文中的this的值总是一个对象且默认为全局对象。
		"use strict"; 
		return function() {
			return this.name;
		};
//		var result = function(){
//			return this.name;
//		}
//		return result;
	}
};

//在浏览器中运行就会打印 The Window 
//如果是在node环境下就会打印 undefined

console.log(object.getNameFunc()());   //The Window 或 undefined
console.log(object.getNameFunc().call(object)); //My Object