async function foo(){
  return Promise.resolve(1).then((res) => {  
    console.log('running');
  });
  console.log('foo')
  return 5
}
console.log('start');
new Promise((resolve, reject) => {
  console.log('promise');
  resolve();
}).then(() => console.log('resolved'));
console.log('end');