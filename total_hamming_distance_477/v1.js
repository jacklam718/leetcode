/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {  
  let totalDistance = 0;
  for (let i = 0; i < nums.length; i++) { 
    for (let j = i+1; j < nums.length; j++) {
      totalDistance += hammingDistance(nums[i], nums[j]);
    }
  }
  return totalDistance;
};

var hammingDistance = function(x, y) {
  const padding = dec2Binary(Math.max(x, y)).length;
  const d1 = dec2Binary(x, padding);
  const d2 = dec2Binary(y, padding);
  let diff = 0;
  for (let i = 0; i < d1.length; i++) {
    if (d1[i] !== d2[i]) diff++;
  }
  return diff;
};

var dec2Binary = function(dec, length) {
  const binary = dec.toString(2);
  if (length > binary.length) {
    const padding = length - binary.length;
    return '0'.repeat(padding) + binary;
  }
  return binary;
}