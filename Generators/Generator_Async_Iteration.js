/**
 * Iterating Generating asynchronously:
 * We can perform async task in generators, and not proceed to next line in generator
 * till async task completes.
 * In below code text would be printed only when we call next from callback of foo
 * i.e when req returns result only after that we are proceeding with next line
 * 
 * Abstracting Asynchrony
 * In generator below code looks synchronous, but behind scenes inside of foo
 * operations can complete asynchronously
 * Now we can reason about our code as sequentially and asynchrony is handled as an abstraction by foo
 * 
 * Error Handling:
 * When error happens in async calls we can catch that error in generator with 
 * help of iterator, with it.throw(), this error will be caught in catch of generator
 */

function foo(x, y) {
    ajax('http://someurl', function (err, data) {
        if (err) {
            // throw an error into *main()
            it.throw(err)
        } else {
            // resume *main with recevied data
            it.next(data)
        }
    })
}

function* main() {
    try {
        // only pauses code in generator itself
        var text = yield foo(11, 13)
        console.log(text)
    } catch (err) {
        console.error(err)
    }
}
