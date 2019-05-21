/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const record = {};
  for (const n of nums) {
    if (record[n]) {
      record[n]++;
    } else {
      record[n] = 1;
    }
    if (record[n] >= 2) {
      return n;
    }
  }
  return -1;
};