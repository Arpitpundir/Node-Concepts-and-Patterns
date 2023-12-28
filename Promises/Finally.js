const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise is resolved!'));
});

promise.finally(() => console.log('Promise is fulfilled!')).then((value) => console.log(value), (error) => console.log(error));
