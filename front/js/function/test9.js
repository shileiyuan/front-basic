/*
 * 函数本身的属性
 */
function func(a, b, c) {}
console.log(func.length); // 3


/*
 *在函数体内，标识符arguments是指向实参对象的引用，实参对象是一个类数组对象
 *arguments.length用来标志其包含的元素个数 
 */
function f(x){
	console.log(x === arguments[0]); //true
	console.log(arguments); //{ '0': 1, '1': 2, '2': 3 }
	console.log(arguments.length); //3
}

f(1,2,3);


//arguments对象有一个重要的用处，就是可以让函数操作任意数量的实参
function max(/*...*/){
	var max = Number.NEGATIVE_INFINITY;
	for(var i=0;i<arguments.length;i++){
		if(arguments[i] > max){
			max = arguments[i];
		}
	}
	return max;
}

console.log(max(3,5,8,9,2,12,8));
