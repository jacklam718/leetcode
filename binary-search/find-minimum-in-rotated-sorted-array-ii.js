/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0;
  let right = nums.length-1;
  while (right - left > 1) {
    const mid = Math.round((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid+1;
    } else if (nums[mid] < nums[left]) {
      right = mid;
    } else {
      right--; 
    }
  }
  return Math.min(nums[left], nums[right]);
};