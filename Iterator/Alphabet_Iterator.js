const ACharCode = 65;
const ZCharCode = 90;

function alphabetIterator(){
    let currCharCode = ACharCode;
    return {
        next(){
            const done = currCharCode > ZCharCode?true:false; 
            const value = done?false:currCharCode++;
            return {
                done,
                value
            };
        }
    }
}

const it = alphabetIterator();
let curr = it.next();
while(!curr.done){
    console.log('----->', curr.value);
    curr = it.next();
}