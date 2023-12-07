import {readFile} from 'fs';
const cache = new Map();

function inConsistentRead(fileName, callback){
    if(cache.has(fileName)){
        // if file is there in cache ther return it immediately
        // call callback synchronously
        callback(cache.get(fileName));
    }else{
        // if file is not there then read file in background then call callback
        // callback executed asynchronously
        readFile(fileName, 'utf8', (err, data) => {
            cache.set(fileName, data);
            callback(data);
        })
    }
}

export const createFileReader = function (fileName){
    const listeners = [];
    inConsistentRead(fileName, value => {console.log(listeners); listeners.forEach(listener => listener(value))});
    return {
        onDataReady: (listener => listeners.push(listener))
    }
}

