function errorHandlingInPromise() {
  const promise = new Promise((resolve, reject) => {
    throw new Error('Whoops!');
  });

  promise
    .catch(function (error) {
      if (error instanceof URIError) {
        // handle it
      } else {
        console.log("Can't handle such error");
        throw error; // throwing this or another error jumps to the next catch
      }
    })
    .then(function () {
      /* doesn't run here */
    })
    .catch((error) => {
      console.log(`The unknown error has occurred: ${error}`);
      // don't return anything => execution goes the normal way
    });
}

errorHandlingInPromise();
