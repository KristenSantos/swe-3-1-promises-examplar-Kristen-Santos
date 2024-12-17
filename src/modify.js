const crypto = require("node:crypto");

/*
Given an array like [123, 456, 789], returns 'rgb(123,456,789)'
*/
const convertColorsArrToRGB = ([color1, color2, color3]) => {
  return `rgb(${color1}, ${color2}, ${color3})`;
};

const getRandomBytes = () =>
  new Promise((resolve, reject) => {
    crypto.randomFill(new Uint8Array(3), (err, buffer) => {
      if (err) return reject(err);
      const colorsArr = [...buffer];
      // Focus here!
      // An array like this will be resolved: [123, 211, 105]
      resolve(colorsArr);
    });
  });

// Hints:
// - understand what getRandomBytes() resolves to
// - understand how to chain together getRandomBytes

// Consider using Promise.all or async/await to improve readability and reduce repetition.
const return4RandomColors = () => {
  const colors = [];
  return getRandomBytes()
    .then((colorArr1) => {
      // getRandomBytes resolves to a colorArr

      // Convert first random colorArr to RGB.
      colors.push(convertColorsArrToRGB(colorArr1));

      // Then start getting the next random color array
      return getRandomBytes();
    })
    .then((colorArr2) => {
      // Convert second random color to RGB.
      colors.push(convertColorsArrToRGB(colorArr2));

      return getRandomBytes();
    })
    .then((colorArr3) => {
      // Convert third random color to RGB.
      colors.push(convertColorsArrToRGB(colorArr3));

      return getRandomBytes();
    })
    .then((colorArr4) => {
      // Convert fourth random color to RGB.
      colors.push(convertColorsArrToRGB(colorArr4));
      // Final array of four RGB colors is returned.
      return colors;
    })
    .catch((err) => {
      console.error("An error occurred while generating random colors:", err);
    });
};

return4RandomColors().then(console.log);

// Suggestions for improvement:
// - Use Promise.all to request all four random colors concurrently instead of chaining.
// - Refactor with async/await for better readability and to avoid deeply nested .then() blocks.

module.exports = {
  convertColorsArrToRGB,
  getRandomBytes,
  return4RandomColors,
};
