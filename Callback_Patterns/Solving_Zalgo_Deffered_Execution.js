import {readFile} from "fs";
const cache = new Map();
function consistentRead(fileName, callback){
    if(cache.has(fileName)){
        process.nextTick(() => {
            callback(cache.get(fileName));
        })
    }else{
        readFile(fileName, 'utf8', (err, data) => {
            cache.set(fileName, data);
            callback(data);
        })
    }
}

export const createConsistentFileReader = function (fileName){
    const listeners = [];
    consistentRead(fileName, value => {console.log(listeners); listeners.forEach(listener => listener(value))});
    return {
        onDataReady: (listener => listeners.push(listener))
    }
}