"use strict";

// status pending - початковий момент часу

// status fulfiled (result - payload) -> then
// status rejected -> catch
function promiseCb(resolve, reject) {
  //actions
  //   resolve("success result");
  reject(new Error("something went wrong..."));
}
const promise = new Promise(promiseCb);

promise
  .then((data) => console.log("data: :>>", data))
  .catch((err) => console.log("err :>> ", err));

// Promise.resolve([{ user: "Test" }]).then((data) =>
//   console.log("data :>> ", data)
// );
// Promise.reject().catch();
console.log('end of sync code');