function submit() {

    const frmSignup = document.getElementsByName('frmSignup')[0];

    console.log(frmSignup.value);
}

// asynchronous
// scoping rule var and let

function init() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function (i_local) {
            return function () { console.log(i_local); }
        }(i), 1000 + i);
    }
}

init();
