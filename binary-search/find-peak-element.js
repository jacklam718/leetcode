/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length-1;
  while (left !== right) {
    const mid = Math.trunc((left + right) / 2);
    // if mid is greater than it's left & right then return the result immediately
    if (nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) {
      return mid;
    }
    if (nums[mid] > nums[mid+1]) {
      right = mid;
    } else {
      left = mid+1;
    }
  }
  return right;
};