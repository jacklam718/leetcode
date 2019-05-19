/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // loop through the nums and count occurrences
  const ccurrenceCount = {};
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    if (ccurrenceCount[key]) {
      ccurrenceCount[key]++;
    } else {
      ccurrenceCount[key] = 1;
    }
  }

  for (const key in ccurrenceCount) {
    if (ccurrenceCount[key] === 1) {
      return key;
    }
  }
  return 0;
};
