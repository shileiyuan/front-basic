//下面是一个对象即时初始化模式的例子：
//var obj =
({
    // 这里可以定义一些设置项，比如常量
    maxwidth: 600,
    maxheight: 400,

    // 你也可以定义一些方法
    gimmeMax: function () {
        return this.maxwidth + "x" + this.maxheight;
    },

    // 初始化
    init: function () {
        console.log(this.gimmeMax());
        // 更多的初始化任务……
        //return this;   //如果希望在初始化工作完成后保持对对象的引用，加上return this即可;
    }
}).init();

//obj.init();

//下面两种语法都是对的：
//({...}).init();
//({...}.init());
