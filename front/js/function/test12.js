/*
 * 实现了记忆功能
 */

function memorize(f){ //这是一个工具函数
	var cache = {}; //将值保存在闭包内
	return function(){
		var key = arguments.length + Array.prototype.join.call(arguments,",");
		if(key in cache){
			return cache[key];
		}else{
			console.log(cache);
			return cache[key] = f.apply(this,arguments);
		}
	};
}
var factorial = memorize(function(n){
	return (n<=1) ? 1 : n*factorial(n-1);
});

/*
 * 计算过5的阶乘后，3的阶乘已经被保存在闭包里面了，就不会再进行计算了，实现了用空间换时间的效果
 */
console.log(factorial(5));
console.log(factorial(3));
