
/*
 * 声明提前
 */
function foo() {
    console.log('global foo');
}
function bar() {
    console.log('global bar');
}

function hoistMe() {

    console.log(typeof foo); // "function"
    console.log(typeof bar); // "undefined"

    foo(); // "local foo"
    bar(); // TypeError: bar is not a function

    // 函数声明：
    // 变量foo和它的定义实现都被提前了

    function foo() {
        console.log('local foo');
    }

    // 函数表达式：
    // 只有变量bar被提前，它的定义实现没有被提前
    /* 如果注释掉下面这段代码就可以执行了*/
    var bar = function () {
        console.log('local bar');
    };
}
hoistMe();
/*
 * 在这段代码中，和普通的变量一样，hoistMe()函数中的foo和bar被“搬运”到了顶部，覆盖了全局的foo()和bar()。
 * 不同之处在于，本地的foo()的位置并不在前面，但它的定义却被提前到了顶部并能正常工作，
 * 而bar()的定义并未提前，只有声明提前了。
 * 因此当程序执行到bar()定义的位置之前，它的值都不是函数，而是undefined（在此期间全局的bar()都是被本地覆盖的）。
 */
