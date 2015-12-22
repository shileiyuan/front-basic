/*
 * call()和apply()的第一个实参是要调用函数的母对象，
 * 在函数体内通过this来获得对它的引用。
 * 调用o对象的f函数,并传入两个参数：
 * 1. f.call(o,1,2);
 * 2. f.apply(o,[1,2]);
*/

//function f(y){
//	return this.x + y;
//}
//var o = {x:1};
//var g = f.bind(o);
//console.log(g(2));   //在浏览器中访问callAndApply.html	会打印 3

function cat(){
	
}
cat.prototype = {
		food:"fish",
		say: function(){
			console.log("I love " + this.food);
		}
}

var blackCat = new cat();
blackCat.say();

whiteDog = {food:"bone"};
/*
但是如果我们有一个对象whiteDog = {food:"bone"},我们不想对它重新定义say方法，那么我们可以通过call或apply用blackCat的say方法：blackCat.say.call(whiteDog);
call和apply是为了动态改变this而出现的，当一个object没有某个方法，但是其他的有，我们可以借助call或apply用其它对象的方法来操作。
 */
blackCat.say.call(whiteDog);
