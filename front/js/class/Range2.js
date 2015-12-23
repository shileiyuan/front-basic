function Range(from,to){
	this.from = from;
	this.to = to;
}

Range.prototype = {
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
};

var r = new Range(1,3);
r.include(2);
r.foreach(console.log);
console.log(r);