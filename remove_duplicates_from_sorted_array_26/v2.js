/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const uniqueSet = new Set(nums);
  nums.length = 0
  uniqueSet.forEach(i => nums.push(i));
};