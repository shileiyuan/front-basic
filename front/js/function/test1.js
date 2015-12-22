/*
 * 函数的递归调用
 */

function foo() {} // 函数声明
var bar = function () {}; // 匿名函数表达式
var i = 5;
var baz = function abc() {
	if(i>=0){
		console.log(i);
		i--;
		baz(); // 此处可以递归调用自己 
	}
}; // 具名函数表达式
baz();

//console.log(foo.name); // "foo"
//console.log(bar.name); // ""
//console.log(baz.name); // "baz"


