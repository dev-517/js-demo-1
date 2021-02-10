// callbacks
// promises
// serialization
// api, svc, websvc, rest api, rest svc

var mobile = {
    width: 5,
    height: 10
};
// xml
// json
// string
// binary
var str = JSON.stringify(mobile); //serialization

//deserialization
const mobile2 = JSON.parse(str);

console.log(mobile2);

function subAsync(a, b) {
    var p = new Promise((res, rej) => {
        setTimeout(() => {
            var c = a - b;
            res(c);
        }, 1000);
    });
    return p;
}

function addAsync(a, b) {
    var p = new Promise((res, rej) => {
        setTimeout(() => {
            if (a === 0) rej("Invalid");
            else {
                var c = a + b;
                res(c);
            }
        }, 1000);
    });

    return p;
}

function mulAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            var c = a * b;
            res(c);
        });
    });
}



// chaining
// addAsync(0, 20)
//     .then(res => subAsync(res, 10))
//     .then(res => mulAsync(res, 10))
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

// console.log(prms);

// setTimeout(() => console.log(prms), 1000);
// timers, db, file, websvc, events

async function init() {
    try {
        const res = await addAsync(0, 20);
        const res2 = await subAsync(res, 10);
        const res3 = await mulAsync(res2, 10);
        console.log(res3);
    } catch (e) {
        console.log(e);
    }
}

init();