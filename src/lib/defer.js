import Promise from "bluebird";

export function defer() {
  let resolve, reject;
  const promise = new Promise(function() {
    resolve = arguments[0];
    reject = arguments[1];
  });
  return {
    resolve: resolve,
    reject: reject,
    promise: promise
  };
}
