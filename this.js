// 'use strict';

function myFun() {
    (function inner() {
        console.log(this);
    }());
}


var m = new myFun();
