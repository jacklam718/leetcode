/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const length = nums.length;
  let duplcatedNumber;
  for (let i = 0; i < length; i++) {
    for (let y = 0; y < length; y++) {
      if (nums[i] === nums[y] && i !== y) {
        duplcatedNumber = nums[y]
      }
    }
  }
  return duplcatedNumber;
};