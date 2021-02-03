// ECMASCRIPT
// ES5
// ES6
// ES7
// w3c
// const
// let
// var scope is function while let is block scoped
// string interpolation
// binary and octal
// spread operator
// rest operator

// let x = 100;

// x = 1000;
// console.log(x);

function f1() {
    // hoisting
    if (true) {
        var y = 20;
        if (true) {
            var x = 10;
            console.log(x);
        }
    }
}


// f1();

var name = "Cooper";
var age = 30;

var output = "Mr. " + name + " is " + age + " years old";

var op2 = `Mr. ${name} is ${age} years old`;

console.log(op2);

let myBinaryVar = 0b1010;
let myOctalVar = 0o123;

console.log(myBinaryVar);
console.log(myOctalVar);