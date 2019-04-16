/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const arr = [].concat(nums1, nums2).sort((a, b) => a - b);
  const size = arr.length;
  if (size % 2 === 0) {
    return (arr[Math.floor(size/2)] + arr[Math.floor(size/2)-1]) / 2;
  } else {
    return arr[Math.floor(size/2)];
  }
};