function returnConstValueFromThenSuccessHandler(isResolve = true){
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {isResolve ? resolve("Success"): reject('Error')});
  });

  const promise2 = promise.then((res) => {
    console.log('Success Handler of First then', res);
    return res;
  }, error => {
    console.log('Error Handler of First then', error);
    return error;
  });

  promise2.then((res) => {
    console.log('Success Handler of Second then', res);
    return res;
  },  error => {
    console.log('Error Handler of Second then', error);
  })
};

function returnPromiseValueFromThenSuccessHandler(isResolve = true){
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {isResolve ? resolve("Success"): reject('Error')});
  });

  const promise2 = promise.then((res) => {
    console.log('Success Handler of First then', res);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Success'));
    })
  }, error => {
    console.log('Error Handler of First then', error);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Success'));
    })
  });

  promise2.then((res) => {
    console.log('Success Handler of Second then', res);
    return res;
  },  error => {
    console.log('Error Handler of Second then', error);
  })
};

//returnConstValueFromThenSuccessHandler();
returnPromiseValueFromThenSuccessHandler(false);
