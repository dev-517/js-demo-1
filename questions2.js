// module pattern
function counter() {
    let initialValue = 0;

    function inc() {
        console.log(++initialValue);
    }

    function dec() {
        console.log(--initialValue);
    }

    return {
        inc,
        dec
    }
}

var myCounter = counter();

myCounter.inc();
myCounter.dec();
myCounter.inc();