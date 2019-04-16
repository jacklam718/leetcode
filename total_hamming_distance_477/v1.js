/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {  
  const padding = dec2Binary(Math.max(...nums)).length;
  let totalDistance = 0;
  for (let i = 0; i < nums.length; i++) { 
    for (let y = i+1; y < nums.length; y++) {
      const d1 = dec2Binary(nums[i], padding);
      const d2 = dec2Binary(nums[y], padding);
      totalDistance += hammingDistance(d1, d2);
    }
  }
  return totalDistance;
};

var hammingDistance = function(d1, d2) {
  let diff = 0;
  for (let i = 0; i < d1.length; i++) {
    if (d1[i] !== d2[i]) diff++;
  }
  return diff;
}

var dec2Binary = function(num, length) {
  const binary = num.toString(2);
  if (length > binary.length) {
    const padding = length - binary.length;
    return '0'.repeat(padding) + binary
  }
  return binary;
}