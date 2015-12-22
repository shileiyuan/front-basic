//闭包
function addNum(iNum1, iNum2) {
	var iBaseNum = 10;
	function doAdd(){
		return iNum1 + iNum2 + iBaseNum;
	}
	return doAdd();
}
var result = addNum(1,2);
console.log(result);










