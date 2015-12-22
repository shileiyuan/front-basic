var out = (function outer() {
	var a = 1;
	return {
		inner1 : function() {
			a++;
		},
		inner2 : function() {
			a = 6;
		},
		getValue: function(){
			console.log(a);
		}
	}

}());

(function() {
	out.inner2();
	out.getValue();
	out.inner1();
	out.getValue();
}());