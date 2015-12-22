function demo1(){
	var obj = {1:'a',2:'hello'};
	console.log(obj[1]); // a
	
	var p = {"name":"Danny"};
	var obj1 = {"a":p,"b":123};
	console.log(obj1.a.name);
}

function demo2(){
	var arr = [];
	arr.length = 9;
	console.log(arr.length);
	console.log(typeof arr);
	var a1 = [,,,];
	console.log(0 in a1);
}

function demo3(){
	var a = [1,2,3];
	Object.defineProperty(a,"length",{writable:false}); //设置length属性为只读的
	a.length = 0;
	console.log(a[1]);
}

function demo4(){
	var a = [1,2,3];
	for(var i=0,len = a.length;i<len;i++){
		console.log(a[i]);
	}
}

function demo5(){
	var a = [32,4,111,22,33];
	a.sort(function(a,b){
		console.log(a+"\t"+b);
		return a-b;
	})
	console.log(a.join(", "));
}
function demo6(){
	var a = [2,5,7,4,6];
	//起始和结束位置，左闭右开
	console.log(a.slice(1,3)); // 5 7
}
function demo7(){
	var a = [1,2,3,4,5,6,7,8]; 
	var b = a.splice(0,3); 
	console.log(a);//[ 4, 5, 6, 7, 8 ]
	console.log(b);//[ 1, 2, 3 ]
	
	var c = [1,2,3,4,5];
	//第一个参数确定了要删除的元素的起始位置（包括该元素），第二个元素确定了要删除的元素的个数，后面的参数是删除元素后要插入的元素
	console.log(c.splice(2,2,[1,2],3)); //3,4
	console.log(c); // [1,2,[1,2],3,5];
}

function demo8(){
	var stack = [];
	stack.push(1,3,2);
	console.log(stack);
	console.log(stack.pop());
	console.log(stack);
}

function demo9(){
	var a = [1,[2,3],[4,[5,6]]];
	console.log(a.toString()); //1,2,3,4,5,6
}

function demo10(){
	var a = ['',1,3,undefined,,null,false,10];
	console.log(a);
	var b = a.filter(function(){
		return true;
	});
	console.log(b);
	var c = a.filter(function(x){
		return x!==undefined && x!=null;
	});
	console.log(c);
	var d = a.filter(function(x){
		return x;
	});
	console.log(d);
}
function demo11(){
	var a = [1,2,3,4,5];
	var sum = a.reduce(function(x,y){
		return x+y;
	});
	console.log(a);
	console.log(sum);
}
//在数组a中查找所有的x，并把索引存到一个数组中
function findAll(a,x){
	var results = [];
		len = a.length;
		pos = 0;
	while(pos < len){
		if(a[pos] === x){
			results.push(pos);
		}
		pos++;
	}
	return results;
}
function demo12(){
	var a = [1,2,3,5,3,7,4,3];
	console.log(findAll(a,3));
}

(function(){
	demo12();
}());











