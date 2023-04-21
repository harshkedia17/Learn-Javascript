// * promises
// ? it means we know in future well get the value even if we dont have it currently
// ! again all of the below is asynchronus and only get shown after the whole script has been executed

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
//produce
const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("rice") & bucket.includes("salt")
  ) {
    resolve("Fried Rice");
  } else reject("Couldn't do it");
});

//consume
friedRicePromise.then(
  // * jab promise resolve hoga
  (myFriedRice) => {
    console.log("let's eat", myFriedRice);
  },
  // ! jab promise reject hoga
  (error) => {
    console.log(error);
  }
); // then takes a callback funtion the first one is when it gets resolved and second one when reject hojaaega

// ? another way to write

friedRicePromise
  .then((sol) => console.log("lets's eat", sol))
  .catch((error) => console.log(error));

// ! usig setTimeout and promises together. But if used seperately then promises have a higher priority than setTimeout.

function myPromise() {
  return new Promise((resolve, reject) => {
    var val = true;
    setTimeout(() => {
      if (val) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

myPromise()
  .then(() => {
    console.log("resolved");
  })
  .catch(() => {
    console.log("rejected");
  });
