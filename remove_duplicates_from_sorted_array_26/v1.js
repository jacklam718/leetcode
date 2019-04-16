/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  
  const tmp = new Map();
  for (let i = 0; i < nums.length; i++) {
    const val = tmp.get(nums[i]) 
    if (val === undefined) {
      tmp.set(nums[i], 1)
    } else {
      tmp.set(nums[i], val+1);
    }
  }
  
  let length = nums.length;
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    while (tmp.get(val) > 1) {
      nums.splice(nums.indexOf(val), 1);
      tmp.set(val, tmp.get(val)-1);
    }
  }
};