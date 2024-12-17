const resolvedWrapper = (value) => {
  // Instead of using `Promise.resolve(value)`, which creates a promise that resolves with the given value,
  // you can use the `new Promise()` syntax to achieve the same result:
  return new Promise((resolve) => resolve(value));
};

const rejectedWrapper = (errorMessage) => {
  // Create a new Error object with the given message
  const error = new Error(errorMessage); 
  return Promise.reject(error);
};

const handleResolvedPromise = (promise) => {
  // Returning `promise.then(...)` from the function allows the caller of `handleResolvedPromise`
  // to handle the resolved value or chain additional `.then` calls.
  return promise.then((value) => {
    console.log(value); // Logs the resolved value of the promise.

    // Returning from inside the `.then` callback is crucial because it ensures the next
    // `.then` in the chain receives the result of this callback as its input.
    
    // Converts the value to uppercase and passes it to the next `.then`.
    return value.toUpperCase(); 
  });
};

// Explanation:
// 1. The `.then` method itself returns a new promise, which is why we return it from the function.
//    This allows the caller to chain additional `.then` or `.catch` methods on the returned promise.
// 2. Inside the `.then` callback, returning a value ensures that the next `.then` in the chain
//    receives that value as its input. Without this return, the next `.then` would receive `undefined`.

// Handles both resolved and rejected Promises, ensuring consistent output in either case.
const handleResolvedOrRejectedPromise = (promise) => {
  return promise
    .then((value) => {
      console.log(value);
      return value.toUpperCase();
    })
    .catch((err) => {
      console.error(`Your error message was: ${err.message}`);
      return null;
    });
};

const pauseForMs = (ms) => {
  return new Promise((resolve) => {
    // The reject parameter is intentionally omitted because this promise always resolves
    setTimeout(() => {
      // Resolve the promise after the specified time
      resolve(); 
    }, ms);
  });
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
