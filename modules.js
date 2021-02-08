"use strict";
// modules 
// AMD, commonjs
// ES6 modules
// public 
exports.__esModule = true;
var MyClass = /** @class */ (function () {
    function MyClass() {
        console.log("init");
    }
    MyClass.prototype.myMethod = function () {
        console.log("myMethod()");
    };
    return MyClass;
}());
exports.MyClass = MyClass;
