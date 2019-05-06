# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num):

var guessNumber = function(n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    const mid = Math.round((left + right) / 2);
    const chosen = guess(mid);
    if (chosen === 0) {
      return mid;
    } else if (chosen === 1) {
      left = mid+1;
    } else {
      right = mid-1;
    }
  }
  return n;
}