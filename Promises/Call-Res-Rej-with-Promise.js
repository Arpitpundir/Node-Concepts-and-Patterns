// calling resolve of a promise with another promise
function PassReolveAnotherPromise() {
  new Promise(function (resolve, reject) {
    setTimeout(
      () => resolve(new Promise((resolve, reject) => resolve(23))),
      1000
    );
  }).then(function (result) {
    console.log('Result', result);
  });
}

// calling reject of a promise with another promise
function PassRejectAnotherPromise() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() =>
      reject(
        new Promise((resolve, reject) => {
          resolve('success');
        })
      )
    );
  });

  promise.then(
    (res) => console.log(res),
    (error) => console.log('error', error)
  );
}


PassRejectAnotherPromise(); //error Promise { 'success' }