let x = 1;
function *foo(){
    x++;
    yield;
    console.log('x:', x);
}

function bar(){
    x++;
}

let it = foo();

it.next();
console.log('x:', x);
bar();
console.log('x:', x);
it.next();