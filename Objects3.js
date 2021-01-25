// dev, qa
// two modes: Strict, sloppy
'use strict';

// Object.create
var baseMobile = {
    call: function () {
        console.log("call");
    },
    sms: function () {
        console.log("sending");
    }
};

var mobile = Object.create(baseMobile, {
    width: { value: 5, writable: false, enumerable: true, configurable: true },
    height: { value: 7, writable: true, enumerable: true },
    color: { value: "Black", writable: true, enumerable: true },
    pi: { value: 3.14, writable: false, enumerable: true, configurable: false },
    toString: {
        value: function () {
            console.log("Stringifying...")
        }
    }
});



// mobile.toString();

// mobile.play();



// reconfigure

// Object.defineProperty(mobile, "width", { writable: true });

// mobile.width = 1000;

// console.log(mobile);

// for (var key in mobile) {
//     console.log(key);
// }