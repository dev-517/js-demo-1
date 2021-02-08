// asynchronous: non blocking, complex
// synchronous
// timers: setTimeout, setInterval


// function f1(a, b) {
//     a++;
//     b++;
//     a = a + 10;

//     b = b + 10;

//     return a + b;
// }

// const res = f1(10, 20);
// console.log(res);

// synchronous: grocery, eating, 
// async: ordering pizza, tailor

// except: timers, db, file, websvc

// asynchronous function
// tailor
// entity 2
function f1Async(a, b, cb) {
    a++;
    b++;
    a = a + 10;
    b = b + 10;

    console.log("Entering async");

    setTimeout(() => {
        var c = a + b;
        console.log("Finished async");
        cb(c, false);
    }, 2000);

    console.log("method execution finished");
}


// entity 1
function callback(res, err) {
    if (err) {
        console.log("Failed to calculate");
    }
    else
        console.log(res);
}

f1Async(10, 20, callback);