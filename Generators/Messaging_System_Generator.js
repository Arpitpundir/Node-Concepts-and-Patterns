function *foo(x){
    var y = x * (yield "Hello");
    return y;
}

let it = foo(6);

// start generator and executes till first yield
let res = it.next();
console.log(res.value); // hello

// fulfills first yield statement and passes 7 as value 
res = it.next(7);
console.log(res.value); // 42