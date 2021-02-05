// object creation
// object literals {}
// constructor (template)
// object.create 
// class


function f1() {
    return 10;
}

// var x = f1();

// var mobile = {
//     call: function () {
//         console.log("calling...");
//     }
// }


// function Mobile() {

//     this.call = function () {
//         console.log("calling...");
//     }
// }

// base class or parent or super class
class BaseMobile {

    constructor() {
        console.log("Base constructor");
    }

    color = "black";
}

// child or derived
class Mobile extends BaseMobile {

    constructor() {
        super();
        console.log("initialized");
    }

    width = 10;

    call() {
        console.log("calling...");
    }
}


var m = new Mobile();
m.call();

// console.log(m.width);
