const MODIFIER_NAMES = ['swap', 'write', 'fill'];

class ImmutableBuffer {
    constructor(size, executor){
        const buffer = Buffer.alloc(size);
        const modifiers = {};

        for(const prop in buffer){
            if(typeof buffer[prop] !== 'function'){
                continue;
            }
            if(MODIFIER_NAMES.some(m => m === prop)){
                /**
                 * If method is an modifier then dont add 
                 * method in object being returned
                 * Add current method with this pointing to 
                 * current buffer instance, to be accessible in executor
                 */
                modifiers[prop] = buffer[prop].bind(buffer);
            }else {
                /**
                 * if method is not a modifier then add current
                 * method to be accessible through object returned
                 */
                this[prop] = buffer[prop].bind(buffer);
            }
        }
        executor(modifiers);
    }
}

const hello = "Hello World";
const immutableBuffer = new ImmutableBuffer(hello.length, ({write}) => {
    write(hello);
});

console.log(String.fromCharCode(immutableBuffer.readInt8(hello.length-1)));
immutableBuffer.write('hello'); // Throws error