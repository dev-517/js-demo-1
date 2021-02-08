// setTimeout, execute something in future

let count = 0;

function myFun() {
    ++count;

    console.log(count);
}

// setTimeout(() => console.log("Executing..."), 4000); // 2000ms => 2000/1000 => 2sec
// ctrl + c
// setInterval(myFun, 1000);