

p.then(res => console.log(res))
    .catch(err => console.log(err));


async function init() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

