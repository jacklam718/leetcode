/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const start = searchLeft(nums, target);
  // optimization
  if (start === -1) {
    return [-1, -1];
  }
  const end = searchRight(nums, target);
  return [start, end];
};

var searchLeft = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left] === target ? left : -1;
}

var searchRight = function(nums, target) {
  let left = 0;
  let right = nums.length-1;
  while (left < right) {
    const mid = Math.ceil((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return nums[right] === target ? right : -1;
}
