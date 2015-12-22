// 柯里化过的add()方法，可以接受部分参数
function add(x, y) {
    var oldx = x, oldy = y;
    if (typeof oldy === "undefined") { // 部分应用
        return function (newy) {
            return oldx + newy;
        };
    }
    // 完整应用
    return x + y;
}

// 测试
console.log(typeof add(5)); // "function"
console.log(add(3)(4)); // 7

// 创建并保存函数
var add2000 = add(2000);
console.log(add2000(10)); // 2010


/*var add2 = function(array){
	for(var i=1;i<array.length;i++){
		if(typeof array[i] === "undefined"){
			return function(newArray){
				return array[i-1]+newArray;
			}
		}
	}
}*/


function schonfinkelize(fn) {
    var slice = Array.prototype.slice,
    stored_args = slice.call(arguments, 1);
    return function () {
        var new_args = slice.call(arguments),
        args = stored_args.concat(new_args);
        return fn.apply(null, args);
    };
}


//普通函数
function add3(x, y) {
    return x + y;
}

// 柯里化得到新函数
var newadd = schonfinkelize(add3, 5);
var result = newadd(4); // 9
console.log(result);

// 另一种选择 直接调用新函数
schonfinkelize(add3, 6)(7); // 13


//用来做函数转换的schonfinkelize()并不局限于单个参数或者单步的柯里化。这里有些更多用法的例子：

//普通函数
function add4(a, b, c, d, e) {
 return a + b + c + d + e;
}

//参数个数可以随意分割
schonfinkelize(add4, 1, 2, 3)(5, 5); // 16

//两步柯里化
var addOne = schonfinkelize(add4, 1);
addOne(10, 10, 10, 10); // 41
var addSix = schonfinkelize(addOne, 2, 3);
addSix(5, 5); // 16












