function demo1(){
	/*
	 * 减小了数组的length后，数组会自动截断，恢复length后，数组也不会恢复了
	 */
	var a = [2,3,5];
	console.log(a[2]);  //5
	a.length = 2;
	console.log(a[2]); //undefined
	a.length = 3;
	console.log(a[2]); //undefined
 	console.log(a[1]); //3
}
demo1();