import fetch from "node-fetch";
function usePromiseRace() {
  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url',
  ];
  const promise = Promise.race(
    urls.map((curr, index) =>
      fetch(curr)
    )
  );

  promise.then(result => {
    console.log('----------------->RaceResult', result);
  }, error => {
    console.log('----------------->RaceError', error);
  });
}
usePromiseRace();