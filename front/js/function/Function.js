var scope = "global";
function constructFunction(){
	var scope = "local";
	return new Function("return scope");//这个函数总会在顶层函数执行。  
}
//constructFunction()(); // local   nodejs下不能用


//检测一个对象是否是真正的函数对象（并且具有函数方法）
function isFunction(x){
	return Object.prototype.toString.call(x) === "[object Function]";
}

console.log(isFunction(constructFunction));