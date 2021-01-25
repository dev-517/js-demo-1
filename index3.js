function add(a, b) {
    console.log(a + b);
}

function f1() {
    return 100;
}

function f2() {
    return 200;
}

add(10, 20);
add("Sheldon ", "Cooper");
add([1, 2, 3], [4, 5, 6]);
add(f1, f2); // higher order

// higher order
// async js
function f2() {

    return function () {

    }
}