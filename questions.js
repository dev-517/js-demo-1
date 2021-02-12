// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// closure
function createBase(initialValue) {

    return function (val) {
        console.log(val + initialValue);
        return val + initialValue;
    }
}


var addSix = createBase(6);

var addTen = createBase(10);

addTen(10);
addTen(20);

// addSix(10);
// addSix(21);