/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // loop through the nums and count occurrences
  const mapItemOccurrences = new Map();
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    if (mapItemOccurrences.has(key)) {
      mapItemOccurrences.set(key, mapItemOccurrences.get(key) + 1);
    } else {
      mapItemOccurrences.set(key, 1);
    }
  }
  
  // find and return if occurrences equals "1" otherwise returns 0
  for (const pair of mapItemOccurrences.entries()) {
    const [ k, v ] = pair;
    // k: nums[n], V: count
    if (v === 1) {
      return k;
    }
  }
  return 0;
};
