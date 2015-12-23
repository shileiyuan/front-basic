
var F = function(){};
var p = F.prototype;
console.log(p.constructor);
var c = F.prototype.constructor;
console.log(F === c); // true

var o = new F();
console.log(o.constructor === c);

console.log(o.prototype);
console.log(o.toString());


Object.prototype.name = "age";
var a = {};
console.log(a.constructor.prototype);