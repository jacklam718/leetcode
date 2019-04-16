/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  while (true) {
    const removeByIndex = nums.indexOf(val);
    if (removeByIndex === -1) {
      return;
    }
    nums.splice(nums.indexOf(val), 1);
  }
};