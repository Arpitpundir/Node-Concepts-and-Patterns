import { readFile } from 'fs'
/**
 * In Asynchronous CPS error is not thrown but passed to next callback
 */
function readJSON(fileName, callback) {
    readFile(fileName, 'utf-8', (err, data) => {
        let parsed
        if (err) {
            return callback(err)
        }
        try {
            parsed = JSON.parse(data)
        } catch (err) {
            return callback(err)
        }

        callback(null, parsed)
    })
}

// not catching error while code execution inside of a callback will cause error to go up the the stack and finally in event loop

function readJsonThrows(fileName, callback) {
    readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data))
    })
}

readJsonThrows('data.txt', (err) => {
    console.log('------------>', err)
})
