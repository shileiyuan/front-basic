/*
 *序列化对象
 *对象序列化是指将对象的状态转换为字符串，也可将字符串还原为对象。 
 */

function demo1(){
	var o = {x:1,y:{z:[false,null,""]}};
	var s = JSON.stringify(o); // 将对象序列化为字符串
	var p = JSON.parse(s);		//将字符串转化为对象
	console.log(typeof s); // string
	console.log(typeof p); // object
	console.log(s);
	console.log(p);
	
}

(function(){
	demo1();
}());