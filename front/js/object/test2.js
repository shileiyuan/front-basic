/*
 * 属性的特性
 * 数据属性的四个特性分别是：它的值（value）,可写性（writable），可枚举性（enumerable）和可配置性（configurable）
 * 存取器属性则用 get属性和set属性代替value和writable
 */

function demo1(){
	var a = {x:1};
	console.log(Object.getOwnPropertyDescriptor(a,"x")); //{ value: 1, writable: true, enumerable: true, configurable: true }	
	
	Object.defineProperty(a,"x",{writable:false}); //设置为不可写	
	//o.x = 5;   //操作失败
	console.log(o.x);
}
demo1();