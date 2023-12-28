function UsePromiseAll() {
  const promise = Promise.all([
    new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  ]);
  promise.then(
    (value) => console.log(value),
    (error) => console.log(error)
  );
}

UsePromiseAll();
