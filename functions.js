// declaration
function f1() {
    //...
    console.log("f1...");
}


// expression
var f2 = function f2() {
    console.log("f2...");
}

// arrow
// function add(a, b) {
//     a++;
//     b++;
//     return a + b;
// }

// (a, b) => {
//     a++;
//     b++;
//     return a + b;
// }

// var add2 = (a, b) => {
//     a++;
//     b++;
//     console.log(a + b);
//     return a + b;
// }


// add2(10, 20);
// function add(a) {
//     return a + 10;
// }

// a => a + 10;

// ctrl + / or cmd+/
function add(a, b) {
    console.log(a + b);
}

// everything is a value
add(10, 20);

add(() => 10, () => 20);
