/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const maxDuplcate = 2;
  let len = nums.length;
  
  const remembered = {};
  nums.forEach(n => {
    const val = remembered[n];
    if (val) {
      remembered[n] = val + 1;
    } else {
      remembered[n] = 1;
    }
  })
  
  
  while (len) {
    const val = nums[len];
    // if (shouldRemove(val, nums)) {
    //   nums.splice(len, 1);
    // }
    while (remembered[val] > 2) {
      nums.splice(nums.indexOf(val), 1);
      remembered[val] = remembered[val] - 1;
    }
    len--
  }
};