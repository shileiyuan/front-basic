function Range(from,to){
	this.from = from;
	this.to = to;
}

/*Range.prototype = {
	constructor:Range,//为原型显示添加一个构造函数
	include:function(x){
		return this.from <= x && x <= this.to;
	},
	foreach: function(f){
		for(var x=Math.ceil(this.from);x<=this.to;x++){
			f(x);
		}
	},
	toString: function(){
		return this.from + "\t" + this.to;
	}
};*/

Range.prototype.include = function(x){
	return this.from <= x && x <= this.to;
};

Range.prototype.foreach = function(f){
	for(var x=Math.ceil(this.from);x<=this.to;x++){
		f(x);
	}
};

Range.prototype.toString = function(){
	return this.from + "\t" + this.to;
};
(function(){
	Object.defineProperty(Range.prototype,"foreach",{enumerable:false});
	var range = new Range(1,10);
	for(r in range){
		console.log(r);
	}	
}());
