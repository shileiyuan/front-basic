//使用var定义函数的时候，只有变量被提前到了脚本或函数的顶部，变量的初始化代码仍然在原来的位置
//使用函数声明语句定义函数的时候，则全部都会被提前到顶部。也就是说，可以在声明一个JavaScript函数之前调用它


//构成函数主体的JavaScript代码在定义之时并不会执行，只有在调用该函数的时候，它们才会执行。
//有四种方式调用函数：
/*
 * 1.作为函数
 * 2.作为方法
 * 3.作为构造函数
 * 4.通过它们的call()和apply()方法间接调用
 */



function demo1(){
	for(var i = 0;i<10;i++){
		console.log(i);
	}
	console.log(i);
	demo2();
}


demo1();

//函数定义表达式
//var demo2 = function(){
//	console.log("demo2");
//};

//函数声明语句
function demo2(){
	console.log("demo2 function");
}

