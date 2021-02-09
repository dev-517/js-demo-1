function subAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            var c = a - b;
            res(c);
        }, 0);
    });
}



function myAsyncFun(a, b) {
    var prms = new Promise(function (res, rej) {
        setTimeout(() => {
            if (b === 0) {
                rej("Invalid input");
            } else {
                subAsync(a, b)
                    .then(op => {
                        var c = a / b + op;
                        res(c);
                    })

            }
        }, 2000);
    });

    return prms;
}

const p = myAsyncFun(20, 10);

p
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });


const p2 = myAsyncFun(20, 0);
p2
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });

