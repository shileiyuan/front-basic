//function demo1(){
//	
//}
//
//(function(){
//	
//}());
//constructor
var Promise = function() {
    this.callbacks = [];
}

Promise.prototype = {
    construct: Promise,
    resolve: function(result) {
        this.complete("resolve", result);
    },

    reject: function(result) {
        this.complete("reject", result);
    },

    complete: function(type, result) {
        while (this.callbacks[0]) {
            this.callbacks.shift()[type](result);
        }
    },

    then: function(successHandler, failedHandler) {
        this.callbacks.push({
            resolve: successHandler,
            reject: failedHandler
        });

        return this;
    }
}

// test
var promise = new Promise();

var delay1 = function() {
    setTimeout(function() {
        promise.resolve('data1');
    }, 1000);
    return promise;
};

var callback1 = function(re) {
    re = re + ' data2';
    console.log(re);
};

delay1().then(callback1)

