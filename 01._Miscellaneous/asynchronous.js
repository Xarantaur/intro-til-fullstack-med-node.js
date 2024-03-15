// asyncronous code:
//the following is asynchronous events:
// Browser event handlers, network calls ( fetching Http etc, tcp, udp,), buffers/streams,
// working with files / directories, setTimeout / setInterval,
// databses

// javascript has one thread - the main thread

// soluction 1. Callbacks
// problem: Callbacks hell også kaldet pyramid of doom.

// solution 2. Promises, er bare et pænt callback
// states:
// 1.pending
// 2.fullfilld
//      - resolved
//      - rejected

// solution 3. async/await
// syntactic sugar
//

/* new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      throw new Error("some error");
      resolve("everything ok");
    } catch (error) {
      console.log(error);
      reject("nothing ok");
    }
  }, 2000);
}); */
/* .then((successMessage) => console.log(successMessage))
.catch((errorMessage) => console.log(errorMessage)); */

/* assignment create a promsified funton that is, a function that returns a new promise, it should either resolve or jegect after 3 seconds */
/* 
function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("something good");
    }, 3000);
  });
} */

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw "oh no";
        resolve("something good");
      } catch (error) {
        console.log(error);
        reject("something bad");
      }
    }, 3000);
  });
}
/* myPromise()
  .then((successMessage) => console.log(successMessage))
  .catch((errorMessage) => console.log(errorMessage)); */

/* try to  simulate the fetch function
call it myFetch
it should return the promise json() so that you can call response.json() on it
as much as possivle trye to imagine how fetch works and simluate the underlying code
 */

function myFetch(resource, options = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve({
          json: () => new Promise((resolve, reject) => resolve("response from server")),
        });
      } catch {
        reject();
      }
    }, 2500);
  });
}
/* myFetch("https://www.domain.com")
.then((response) => response.json())
.then((result) => console.log(result)) */

// IIFE
(async () => { 
  try {
    const myPromiseResult = await myPromise();
    console.log(myPromiseResult);
  } catch (error) {
    console.log(error);
  }
})();
