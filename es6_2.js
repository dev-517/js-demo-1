//object destructuring
// array destructuring
// arrow 

var mobile = {
    width: 5,
    height: 10,
    color: "black",

    specs: {
        ram: '4GB',
        procesor: '1GHZ'
    }
};

// var w = mobile.width;
// var h = mobile.height;
// console.log(w, h);

const { width, height, color, specs: { ram } } = mobile;

// console.log(ram);


var arr = [1, 2, 3];

var first = arr[0];
var middle = arr[1];
var last = arr[2];

// give me first 3 elements from arr
var [f, m,l] = arr;

console.log(first, middle, last);