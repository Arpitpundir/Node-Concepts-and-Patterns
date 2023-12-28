const executor = (resolve, reject) => { 
  console.log('Inside executor');
  resolve('Resolved');
  reject('Rejected');
};

const newPromise = new Promise(executor);

newPromise.then((res) =>{
  console.log(res);
}, (error) => {
  console.log(error);
});

