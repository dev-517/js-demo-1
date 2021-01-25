// Constructor function
// Pascal casing
// everything is a value


function Mobile(color) {
    // state
    this.color = color;
    this.width = 5;
    this.height = 3;
}

Mobile.prototype.PI = 3.14;

// 4 bytes
Mobile.prototype.call = function () {
    console.log("calling...");
}

var m = new Mobile("Black"); // 12 bytes
var m1 = new Mobile("Red");  // 12 bytes
var m2 = new Mobile("Grey"); // 12 bytes

m2.call();


// reference types
// var m5 = m1;

// var x = 10;
// var y =x; // copy 


// console.log(m1 === m5);