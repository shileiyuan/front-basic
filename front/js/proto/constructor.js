Object.prototype.a = "abc";

//var o = new Object;
var o = {};
for(i in o){
	if(o.hasOwnProperty(i))
		console.log(i+"\t"+o[i]);
}
//console.log(o.a);