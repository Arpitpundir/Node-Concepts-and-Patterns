/**
 * Returned value of generator is an iterator which is also an iterable
 * Generator can be used to produce values, such that current value is produced from last value which is in state
 * Below func something yields a new value everytime next is called
 * Everytime next is called loop runs again and produces a new value
 
 * Stopping a generator from outside:
 * Call it.return() from outside would cause generator to terminate
 * finally clause will always run even when generator is closed from outside
 */
function* something() {
    try{
        var nextVal
        while (true) {
            if (nextVal === undefined) {
                nextVal = 1
            } else {
                nextVal = 3 * nextVal + 6
            }
            yield nextVal
        }
    } finally{
        console.log('Terminating Generator');
    }
}
const it = something();
for (let v of it) {
    console.log(v)
    if (v > 500) {
        console.log(it.return("this will close terminator").value);
    }
}
