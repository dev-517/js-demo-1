'use strict';

function Mobile() {

    this.width = 10;

    this.call = function () {
        const inner = () => {
            console.log(this);
        }
        inner();
    }
}

var m = new Mobile();
m.call();