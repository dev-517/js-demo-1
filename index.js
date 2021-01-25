console.log("hello world"); // cmd ++

// Data types
// System Design (Low level)

// int, short, byte, long, float, double, 
// number, string, boolean, object, function, undefined
// Loosely typed language
// Strongly typed lang
// int x = 10;
// x = "abc";
// strings
// arrays 
// Objects
// Reflection

var x = 10;

x = "abc";
x = 'abc';

var y = true;

var z = null;



var w = {};

// Properties, Data, State
// Methods, behavior, operations
var mobile = {
    color: "black",

    call: function () { }
}


// function add(a,b){
//     ...
// }


// console.log(typeof x);

// Functions
// clean code
// SRP

function add(a, b){
    var c = a + b;
    return c;
}

function myCoolFunction(){

}

var res = add(10, 20);
console.log(res);
