/*
 * 即时函数
 * 即时函数是一种语法模式，它会使函数在定义后立即执行。看这个例子：
 */

(function () {
    console.log('watch out!');
}());

/*
 * 这种模式由以下几个部分组成：

    使用函数表达式定义一个函数。（不能使用函数声明。）
    在最后加入一对括号，这会使函数立即被执行。
    把整个函数包裹到一对括号中（只在没有将函数赋值给变量时需要）。

下面这种语法也很常见（注意右括号的位置），但是JSLint倾向于第一种：

(function () {
    alert('watch out!');
})();
*/



//如果这段代码没有被包裹到立即执行函数中，那么变量days、today、msg都会是全局变量，而这些变量仅仅是因为初始化而遗留下来的垃圾，没有任何用处。
(function () {

    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        today = new Date(),
        msg = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();

    console.log(msg);

}()); // "Today is Fri, 13"



//即时函数也可以接受参数，看这个例子：

//打印出：
//I met Joe Black on Fri Aug 13 2010 23:26:59 GMT-0800 (PST)

(function (who, when) {

 console.log("I met " + who + " on " + when);

}("Joe Black", new Date()));

//和其它的函数一样，即时函数也可以返回值，并且这些返回值也可以被赋值给变量：

var result = (function () {
    return 2 + 2;
}());

//console.log(result);



//在定义一个对象属性的时候也可以使用即时函数。设想一下这样的场景：你需要定义一个对象的属性，这个属性在对象的生命周期中都不会改变，但是在定义之前，你需要做一些计算来得到它的值。这种情况下你就可以使用即时函数来包裹那些额外的计算工作，然后将它的返回值作为对象属性的值。下面是一个例子：
var o = {
    message: (function () {
        var who = "me",
            what = "call";
        return what + " " + who;
    }()),
    getMsg: function () {
        return this.message;
    }
};
// 使用对象
console.log(o.getMsg()); // "call me"
console.log(o.message); // "call me"
//在这个例子中，o.message是一个字符串，而不是一个函数，但是它需要一个函数在脚本载入后通过计算得到这个属性值。
























