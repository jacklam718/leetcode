/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let index = nums.indexOf(val);
  if (index > -1) {
    nums.splice(index, 1);
    removeElement(nums, val);
  }
};