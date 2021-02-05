// map, reduce, filter, forEach

var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
}

// console.log(arr);
// map transformation
// functional programming
// immutables

// var newArr = arr.map(val => val * 2);

// var elements = arr.map(val => val % 2 === 0);

// console.log(elements);

// var indexes = arr.map((val, idx) => idx % 2 === 0);

// console.log(indexes);

arr = [1, 2, 3, 4];
function myMap(fun) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        var res = fun(arr[i]);
        newArr[i] = res;
    }

    return newArr;
}

Array.prototype.myMap = myMap;

var result = arr.myMap(val => val * 3);

arr.map(val=>val*3);

// var result = myMap(arr, val => val * 3);
console.log(result);