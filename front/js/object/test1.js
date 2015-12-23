/*
 * 属性getter和setter, 即存取器属性
 */
function demo1(){
	var serialnum = {
		$n:0,
		get next(){
			return this.$n++;
		},
		set next(n){
			if(n>= this.$n){
				this.$n = n;
			}
			else {
				//序列号值不能比当前值小
				throw "can't be smaller than current";
			}
		}
	}
	
	//将next当作了一个属性来用
	console.log(serialnum.next);
	serialnum.next = 11;
	//serialnum.next = 10;
	console.log(serialnum.next);
	console.log(serialnum.$n);
	
	/*
	 * { get: [Function: next],
  		set: [Function: next],
  		enumerable: true,
  		configurable: true }
	 */
	console.log(Object.getOwnPropertyDescriptor(serialnum,"next"));
}

(function(){
	demo1();
}());