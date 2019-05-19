/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = 0;
  let right = num;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = mid * mid;
    if (sum === num) {
      return true;
    }
    if (sum < num) {
      left = mid+1;
    } else {
      right = mid-1;
    }
  }
  return false;
};