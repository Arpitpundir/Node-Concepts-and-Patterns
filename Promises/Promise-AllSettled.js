import fetch from "node-fetch";
function usePromiseAllSettled() {
  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url',
  ];
  const promise = Promise.allSettled(
    urls.map((curr, index) =>
      fetch(curr)
    )
  );
  promise.then(
    (res) => {
      console.log('-------------->AllSettledResult', res);
    },
    (err) => {
      console.log('----------------->AllSettledError', err);
    }
  );
}

usePromiseAllSettled();