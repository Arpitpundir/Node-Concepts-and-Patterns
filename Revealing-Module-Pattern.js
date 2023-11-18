/**
 * When current file gets executed in global scope then files content wont pollute global scope
 * as function scope wont allow unretunrned variables to be accessible
 */
const myModule = (function (){
    const privateF1 = () => {console.log('F1')};
    const privateF2 = () => {console.log('F2')};
    return {
        publicF1: privateF1,
        publicF2: privateF2
    }
})();

console.log(myModule.publicF1, myModule.privateF1); // [Function: privateF1] undefined
