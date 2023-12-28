export function Promisify(fn){
  return function(...args){
    return new Promise((resolve, reject) => {
      function callback(erro, results){
        if(result){
          resolve(result);
        }else{
          reject(error);
        }
      }
      args.push(callback);
      fn.call(this, ...args);
    })
  } 
};

function useCallback(value, callback){
  setTimeout(() => callback(null, value), 2000);
}

const promisifiedFunction = Promisify(useCallback);
promisifiedFunction(100).then(result => {
  console.log('------>result', result);
}, error => {
  console.log('------------->error', error);
});

