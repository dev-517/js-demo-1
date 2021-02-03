

// // var m2 = mobile;

// var m2 = { ...mobile }; // clone

// console.log(mobile === m2);

// console.log(m2);


// function Mobile(color) {
//     this.width = 10;
//     this.height = 20;
//     this.color = color
// }

// var m1 = new Mobile("Black");
// var m2 = new Mobile("Red");


// var mobile = {
//     width: 10,
//     height: 5,
//     color: "black"
// };

// var m1 = { ...mobile };
// var m2 = { ...mobile, color: "red", newProp: "some value" };

// console.log(m1, m2);


var arr = ["a", "b", "c"];

// es5 equivalent of array spread
// var obj = {};

// for (var i = 0; i < arr.length; i++) {
//     obj[i] = arr[i];
// }
// console.log(obj);


var obj = { ...arr };
console.log(obj);

