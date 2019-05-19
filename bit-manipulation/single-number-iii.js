/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const appearOnce = [];
  for (let i = 0; i < nums.length; i++) {
    if (appearOnce.indexOf(nums[i]) === -1) {
      appearOnce.push(nums[i])
    } else {
      appearOnce.splice(appearOnce.indexOf(nums[i]), 1);
    }
  }
  return appearOnce;
};