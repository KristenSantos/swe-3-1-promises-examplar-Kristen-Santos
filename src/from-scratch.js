const resolvedWrapper = (value) => {
  return Promise.resolve(value);
};

const rejectedWrapper = (errorMessage) => {
  const error = new Error(errorMessage); // Create a new Error object with the given message
  return Promise.reject(error);
};

const handleResolvedPromise = (value) => {
  return value.then((value) => {
    console.log(value);
    return value.toUpperCase();
  });
};

// Handles both resolved and rejected Promises, ensuring consistent output in either case.
const handleResolvedOrRejectedPromise = (value) => {
  return value
    .then((value) => {
      console.log(value);
      return value.toUpperCase();
    })
    .catch((err) => {
      console.error(`Your error message was: ${err.message}`);
      return null;
    });
};

// Best practice: Use `pauseForMs` in async/await workflows for better readability.
const pauseForMs = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(); // Resolve the promise after the specified time
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
