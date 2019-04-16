/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    const index = nums.indexOf(nums[i]);
    if (nums[index] !== nums[index+1]) {
      return nums[i]
    };
  }
};