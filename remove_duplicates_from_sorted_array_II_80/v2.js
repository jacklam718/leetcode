/**
 * @param {number[]} nums
 * @return {number}
 */
class Solution{
  cache = {}
  maxDuplicates = 2

  shouldRemove(val) {
    if (this.cache[val]) {
      return this.cache[val] > Solution.MAX_DUPLCATE;
    }
    this.updateCache(val, this.nums.filter(v => v === val).length);
    return this.cache[val] > this.maxDuplicates;
  }

  updateCache(key, val) {
    this.cache[key] = val;
  } 

  removeDuplicates = (nums) => {
    let index = nums.length;
    this.nums = nums;
    while (index) {
      const val = nums[index];
      if (this.shouldRemove(val)) {
        nums.splice(nums.indexOf(val), 1);
        this.updateCache(val, this.cache[val] - 1);
      }
      index--
    }
  }
}

var removeDuplicates = function(nums) {
  return new Solution().removeDuplicates(nums);
}