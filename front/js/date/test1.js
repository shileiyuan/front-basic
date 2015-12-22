function test1(){
	var person = {
		"id": 3,
		"name": "Danny",
		"age":10
	};
	for (one in person){
		console.log(one+"\t"+person[one]);
	}
}

function testDate(){
	var unixTimestamp = Date.now(); // in milliseconds
//	console.log(unixTimestamp);
	
	var today = new Date();
	var birthday = new Date('December 17, 1995 03:24:00');
	var birthday = new Date('1995-12-17T03:24:00');
	var birthday = new Date(1995, 11, 17);
	var birthday = new Date(1995, 11, 17, 3, 24, 0);
//	console.log(today > birthday);
	console.log(Date.parse("2015-12-05")===Date.parse("2015-12-5") );
	console.log(new Date(Date.parse("2015-12-05")).getMinutes());
	console.log(new Date(Date.parse("2015-12-5")).getMinutes());
	console.log(Date.parse("March 7, 2014"));  //a local time zone
	console.log(Date.parse("2014-03-07"));
}


function test2(){
//	var a = new Object()
//	console.log(a.prototype.consturctor);
	var triangle = {a:1, b:2, c:3};

	function ColoredTriangle() {
	  this.color = "red";
	}

	ColoredTriangle.prototype = triangle;
	var obj = new ColoredTriangle();
	for (var prop in obj) {
//	  if( obj.hasOwnProperty( prop ) ) {
//	    console.log("obj." + prop + " = " + obj[prop]);
//	  } 
		console.log("obj." + prop + " = " + obj[prop]);
		  
	}

	// Output:
	// "obj.color = red"
}

(function(){
//	test1();
//	testDate();
	test2()
}());

