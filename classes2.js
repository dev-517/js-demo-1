// getters and setters
// shorthand properties
// modules
// asynchronous JS
// DOM

'use strict';

class Student {

    constructor(id, name) {
        // initialization logic
        this.id = id;
        this.name = name;
    }

    id = 0;
    name = "abc";
    active = false;

    display() {
        console.log(this.id, this.name);
    }

    get isActive() {
        return this.active;
    }
}

var s = new Student(123, "Xyz");

s.isActive = false;

console.log(s);



