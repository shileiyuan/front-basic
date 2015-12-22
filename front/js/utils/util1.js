/*
 * in 操作符
 */
function demo1(){
	var a = [1,2,3,5];
	console.log(1 in a);
	var o = {name:"LiMing",age:10};
	console.log("age" in o);
}


(function(){
	demo1();
}());