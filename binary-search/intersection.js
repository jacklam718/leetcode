/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const result = [];
  for (const val of nums1) {
    if (!result.includes(val) && nums2.includes(val)) {
      result.push(val);
    }
  }
  result.filter()
  return result;
};