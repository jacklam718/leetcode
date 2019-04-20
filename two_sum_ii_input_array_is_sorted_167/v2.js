/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let curr = 0;
  let len = numbers.length-1;
  while (curr < len) {
    const sum = numbers[curr] + numbers[len];
    if (sum === target) {
      return [curr+1, len+1];
    } else if (sum < target) {
      curr++;
    } else {
      len--;
    }
  }
  return [];
};