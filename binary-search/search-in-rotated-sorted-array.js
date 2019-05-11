var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    const mid = Math.round((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    // if true this is rotated else not rotated
    if (nums[left] <= nums[mid]) {
      // if true the target is on left side otherwise the target is on right side
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}