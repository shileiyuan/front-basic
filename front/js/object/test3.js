/*
 * 对象的三个属性:每一个对象都有与之相关的原型（prototype）,类（class)和可扩展性(extensible attribute)
 * 通过对象直接量创建的对象使用Object.prototype作为它们的原型。
 * 通过new创建的对象使用构造函数的prototype属性作为它们的原型。
 * 通过Object.create()创建的对象使用第一个参数(也可以是null)作为它们的原型。
 */

function demo1(){
	var p = {x:1}; // 定义一个原型对象
	var o = Object.create(p); //使用这个原型创建一个对象
	var a = p.isPrototypeOf(o);  //p是不是o的原型 true
	var b = Object.prototype.isPrototypeOf(o); // Object.prototype是不是o的原型 true
	console.log(a);
	console.log(b);
}

//类属性
function demo2(){
	function classof(o){
		if(o===null) return "Null";
		if(o === undefined) return "Undefined";
		return Object.prototype.toString.call(o).slice(8,-1);
	}
	console.log(classof(null));
	console.log(classof(""));
	console.log(classof(new Date()));
}
//可扩展性:对象的可扩展性用以表示是否可以给对象添加新属性
function demo3(){
	var a = {};
	console.log(Object.isExtensible(a));  //true
	
	//将对象转换为不可扩展的
	 Object.preventExtensions(a);
	 a.o = "aaa";
	 console.log(a.o); // undefined
}

(function(){
	demo3();
}());