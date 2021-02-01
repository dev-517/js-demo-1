function counter(count) {

    function inc() {
        ++count;
        console.log(count);   
    }

    function dec() {
        --count;
        console.log(count);
    }

    return {
        inc: inc,
        dec: dec
    };
}

var res = counter(100);
var res2 = counter(10);

res.inc();
res.inc();

res.dec();


