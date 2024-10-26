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
console.log("end of sync code");

// проміс - кіт Шредингера
const executor = function (resolve, reject) {
  if (Math.random() < 0.5) {
    resolve("cat is alive");
  } else {
    reject(new Error("cat is not alive"));
  }
};
const shredCat = new Promise(executor);

shredCat
  .then((data) => console.log("data :>> ", data))
  .catch((err) => console.log("err :>> ", err));
