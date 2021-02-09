function myAsyncFun(a, b) {
    var prms = new Promise(function (res, rej) {
        setTimeout(() => {
            if (b === 0) {
                rej("Invalid input");
            } else {
                res(a / b);
            }
        }, 1000);
    });

    return prms;
}

// const p = myAsyncFun(20, 10);

// p
//     .then(function (res) {
//         console.log(res);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// async and await

async function init() {
    const result = await myAsyncFun(20, 10);
    console.log(result);
}

init();