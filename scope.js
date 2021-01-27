// no public, private
// IIFE: immediately invoked function expression
// revealing module pattern
// es6 modules

(function () {
    var x = 10;
    console.log(x);
})();

function mobile() {
    var width = 10;
    var height = 20;

    var print = function () {
        console.log(width, height);
    }

    var call = function () {
        console.log("call...");
    }

    // public
    return {
        print: print,
        call: call
    }
}

var res = mobile();

console.log(typeof res);
console.log(res.width);
