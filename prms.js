// Promises
function funAsync(a, b) {
    var p = new Promise((success, failure) => {
        setTimeout(() => {
            var c = a + b;
            success(c);
        }, 2000)
    });

    return p;
}


// entity 1
// promise is resolved, rejected
// only once
var prms = funAsync(10, 20);
prms.then(function (res) {
    console.log("success");
    console.log(res);
}).catch(function (err) {
    console.log("catch");
    console.log(err);
});


prms.then(function (res) {
    console.log(res);
});

prms.then(function (res) {
    console.log(res);
});

prms.then(function (res) {
    console.log(res);
});