/**
 * Iterating over Promises with help of Generator:
 * We can wait for a promise to fulfill and then start execution of another
 * promise with help yield and wire that promise to controls generator's iterator
 */

function foo(x, y) {
    return request('http: someurl')
}

function* main() {
    try {
        const text = yield foo(11, 31)
        console.log(text)
    } catch (err) {
        console.error(err)
    }
}

const it = main()
const p = it.next.value()

p.then(
    function (text) {
        it.next(text)
    },
    function (err) {
        it.throw(err)
    }
)

/**
 * Utility function which is used to iterate over promised in generators
 */
function run(gen) {
    var args = [].slice.call(arguments, 1),
        it

    // initialize the generator in the current context
    it = gen.apply(this, args)

    // return a promise for the generator completing
    return Promise.resolve().then(function handleNext(
        value
    ) {
        // run to the next yielded value
        var next = it.next(value)

        // generator has completed running?
        if (next.done) {
            return next.value
        }
        // otherwise keep going
        else {
            return Promise.resolve(next.value).then(
                // resume the async loop on
                // success, sending the resolved
                // value back into the generator
                handleNext,

                // if `value` is a rejected
                // promise, propagate error back
                // into the generator for its own
                // error handling
                function handleErr(err) {
                    return Promise.resolve(
                        it.throw(err)
                    ).then(handleResult)
                }
            )
        }
    })
}
