// const myPromise = Promise.resolve(5);
// myPromise.then((value) => {
//   console.log(value);
// });

// ! then() returns a promise
// * due to which we can chain it

function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("fooo");
  });
}

myPromise()
  .then((value) => {
    console.log(value);
    value += "bar";
    return value; // this doesnt return a value rather a promise
    // ! bts it is working like return Promise.resolve(value)
  })
  .then(value=>{
    console.log(value);
    value+='baz';
    return value
  })
