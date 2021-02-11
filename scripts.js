function onBtnClick() {
    var div = document.getElementById('mydiv');
    div.remove();
    window.alert("removed");
}

function create() {
    const allBody = document.getElementsByTagName('body');
    const body = allBody[0];
    const div = document.createElement('div');
    div.innerText = "This is dynamic div";

    body.appendChild(div);
    console.log("created");
}

function onSave() {
    const fname = document.getElementsByName('firstname')[0];
    const lname = document.getElementsByName('lastname')[0];
    const pwd = document.getElementsByName('password')[0];

    const lblFName = document.getElementById('fname');
    lblFName.innerText = fname.value;

    const lblLName = document.getElementById('lname');
    lblLName.innerText = lname.value;

    console.log(fname.value, lname.value, pwd.value);
}