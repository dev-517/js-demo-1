// operators
// conditional statements
// functions
// Find whether a number is even?
// 2,4,6,8 
// 2/2 4/2 6/2 


function isEven(x) {
    // hard coding 
    // var x = 20;
    if (x < 0) return false;

    var result = x % 2;

    // if(result === 0) return true;
    // else return false;

    return result === 0;
}

function isEven2(x) {
    var lastDigit = x % 10;

    var result = lastDigit % 2;

    return result === 0;
}

// 12345678
// Big Oh notation
function printDigits(x) {
    while (x > 0) {
        var reminder = x % 10;
        console.log(reminder);
        x = parseInt(x / 10);
    }
}


// loosely typed lang
function isPrime(x) {
    var count = 2;
    var upper = parseInt(x / 2);
    for (var i = 2; i <= upper; i++) {
        if (x % i === 0) {
            ++count;
        }
    }

    return count === 2;

    // if (count === 2) return true;
    // return false;
}

var res = isPrime(15);
console.log(res);


function sort(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            
        }
    }
}
