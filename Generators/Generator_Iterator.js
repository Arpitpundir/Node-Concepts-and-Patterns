/**
 * Returned value of generator is an iterator which is also an iterable
 * Generator can be used to produce values, such that current value is produced from last value which is in state
 * Below func something yields a new value everytime next is called
 * Everytime next is called loop runs again and produces a new value
 */
function* something() {
    var nextVal
    while (true) {
        if (nextVal === undefined) {
            nextVal = 1
        } else {
            nextVal = 3 * nextVal + 6
        }
        yield nextVal
    }
}

for (let v of something()) {
    console.log(v)
    if (v > 500) {
        break
    }
}
