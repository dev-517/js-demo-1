// synchronous
// asynchronous:  file, db, timers, web svc calls
// single threaded
// blocking
// synchronization
// dead locks race codtion
// callback hell

function funAsync(a, b, cb) {
    setTimeout(() => {
        var c = a - b;
        cb(c);
    }, 1000)
}

function addAsync(a, b, cb) {

    console.log("started...");

    setTimeout(() => {
        funAsync(a, b, function (res) {
            var c = a + b + res;
            cb(c);
        })
    }, 1000);

    console.log("Finished");
}

// addAsync(10, 20, function callback(res) {
//     console.log(res);
// });


function fetchCountries(cb) {
    setTimeout(() => {
        console.log("Fetched countries");
        cb("India");
    }, 1000);
}

function fetchStates(country) {
    setTimeout(() => console.log("Fetched states"), 10);
}

// parellel
// sequential
fetchCountries(function (res) {
    fetchStates(res);
});

