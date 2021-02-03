function add(x, a, b, c) {
    const d = x + a + b + c;
    console.log(d);
}

var arr = [1, 2, 3, 5, 6, 7];

// add(1, 2, 3);

// add(arr[0], arr[1], arr[2]);

add(10, ...arr);

// function add2(a, b) {
//     console.log(a + b);
//     return a + b;
// }

// add2();