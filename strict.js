// 'use strict'

// a = 10;

// var a = 10;

// console.log(a);

// function add(a, a) {
//     console.log(a);
// }

// add(10, 20);
// this keyword

function Mobile() {
    this.width = 10;

    this.print = function () {
        console.log(this);
    }
}

function Car() {
    this.width = 1000;
    this.brand = "Hyundai";

    this.print = function (a, b) {
        console.log(this);
    }
}

// runtime polymorphism
// "this context" new -> current object
// function  -> global object
// apply -> object

var m = new Mobile();
var c = new Car();

var animal = {
    weight: 100
};
// c.print.apply(m, [10, 20]);
// c.print.call(m, 10, 20);

var f = c.print.bind(m, 10, 20); // context is mobile

f.call(animal, 10, 20); // context animal