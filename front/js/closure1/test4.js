var name = "The Window";

var object = {
	name : "My Object",
	getNameFunc : function() {
		var that = this;  //这里的this代表了object
		return function() {
			return that.name;
		};
	}
};
console.log(object.getNameFunc()());