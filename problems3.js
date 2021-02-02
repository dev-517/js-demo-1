var calculator = {
    add: function (a, b) {
        console.log(a + b);
    },

    sub: function (a, b) {
        console.log(a - b);
    },

    mul: function (a, b) {
        console.log(a * b);
    },

    div: function (a, b) {
        if (b === 0) throw new Error("Divide by zero");
        console.log(a / b);
    }
}

// Recursion
// write recursive algorithm to print n to 1
// same method
// lesser input size
// base condition
// quick sort

// n to 1
// 1 to n
// Es6
function print(n) {

    if (n === 0) return;

    print(n - 1);
    console.log(n);
}


function print2(n) {

    for (var i = n; i > 0; i--) {
        console.log(i);
    }
}

print(100)