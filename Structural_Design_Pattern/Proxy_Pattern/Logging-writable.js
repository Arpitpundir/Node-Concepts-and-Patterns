import { createWriteStream } from 'fs';
/**
 * Goal is to create a proxy object for a stream 
 * such that whenever we write some data to the stream,
 * then this data is logged as well
 */

function createLoggingWritable (writable) {
    return new Proxy(writable, { 
      get (target, propKey, receiver) { 
        if (propKey === 'write') { 
          return function (...args) { 
            const [chunk] = args
            console.log('Writing', chunk)
            return writable.write(...args)
          }
        }
        return target[propKey] 
      }
    })
}

const writable = createWriteStream('test.txt');
const writableProxy = createLoggingWritable(writable);

writableProxy.write('First chunk');
writableProxy.write('Second chunk');
/*
 because we are calling write on writable directly without passing this 
 call through proxy and hence no logging behaviour
*/
writable.write('This is not logged');
writableProxy.end();