/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  const padding = dec2Binary(Math.max(x, y)).length;
  // padding for ensure the two binary in same length
  const d1 = dec2Binary(x, padding);
  const d2 = dec2Binary(y, padding);
  let diff = 0;
  for (let i = 0; i < d1.length; i++) {
    if (d1[i] !== d2[i]) diff++;
  }
  return diff;
};

var dec2Binary = function(number, length) {
  const binary = number.toString(2);
  if (length > binary.length) {
    // add 0 prefix padding
    const padding = length - binary.length;
    return '0'.repeat(padding) + binary;
  }
  return binary;
}