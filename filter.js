// implement myFilter function
var arr = [1, 2, 3, 4];

var isEven = function (val) {
    return val % 2 === 0;
}

var even = val => val % 2 === 0;

var result = arr.filter(even);

console.log(result);
