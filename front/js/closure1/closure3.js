/*
 * For instance, when creating a new object/class, 
 * methods should normally be associated to the object's prototype rather than defined into the object constructor. 
 * The reason is that whenever the constructor is called, 
 * the methods would get reassigned (that is, for every object creation).
 */

/*这种方法不好，因为使用了闭包*/
function MyObject(name, message) {
	this.name = name.toString();
	this.message = message.toString();
	this.getName = function() {
		return this.name;
	};

	this.getMessage = function() {
		return this.message;
	};
}
/* 这种方法没有使用闭包，However, redefining the prototype is not recommended */
function MyObject(name, message) {
	this.name = name.toString();
	this.message = message.toString();
}
MyObject.prototype = {
	getName : function() {
		return this.name;
	},
	getMessage : function() {
		return this.message;
	}
};

/* 这种方法是可以的 */
function MyObject(name, message) {
	this.name = name.toString();
	this.message = message.toString();
}
MyObject.prototype.getName = function() {
	return this.name;
};
MyObject.prototype.getMessage = function() {
	return this.message;
};

/* The above code can also be written in a cleaner way with the same result: */
function MyObject(name, message) {
	this.name = name.toString();
	this.message = message.toString();
}
(function() {
	this.getName = function() {
		return this.name;
	};
	this.getMessage = function() {
		return this.message;
	};
}).call(MyObject.prototype);

// In the two previous examples, the inherited prototype can be shared by all
// objects
// and the method definitions need not occur at every object creation.

