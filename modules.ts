// modules 
// AMD, commonjs
// ES6 modules
// public 

class MyClass {

    constructor() {
        console.log("init");
    }

    myMethod() {
        console.log("myMethod()");
    }
}

var obj = { width: 10 };

const PI = 3.14;

const f1 = function () { }

const v2 = 100;

export { MyClass, obj, PI, f1 };

const f2 = function () {
    console.log("f2....");
}


export default f2;




