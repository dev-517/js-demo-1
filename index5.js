// objects
// function, method
var mobile = {
    color: "black",
    width: 5,
    height: 7,

    call: function (phone) {
        console.log("calling...." + phone);
    }
};

// properties
// dot notation
// bracket notation
// code align alt+shift+F
// var prop = "color";

// console.log(mobile[prop]); // undefined

// reflection: reading props at run time
for (var key in mobile) {
    if (typeof mobile[key] === 'function') {
        mobile[key]("9676767");
    } else {
        console.log(mobile[key]);
    }
}