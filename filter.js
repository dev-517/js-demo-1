// implement myFilter function
var arr = [1, 2, 3, 4];

var isEven = function (val) {
    return val % 2 === 0;
}

var even = val => val % 2 === 0;

var result = arr.filter(even);

console.log(result);

// map transformation
// filter 
function myFilter(filterFn) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        var res = filterFn(arr[i]);
        // truthy {}, [], 1, 2, true
        // falsy: 0, "", null, undefined, false, NaN
        if (res) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

Array.prototype.myFilter = myFilter;

var arr2 = [1, 2, 3, 4, 5];

// higher order function
var res = arr2.myFilter(val => val % 2 === 0);

console.log(res);