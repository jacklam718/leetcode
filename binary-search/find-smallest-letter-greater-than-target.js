/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let left = 0;
  let right = letters.length-1;
  // return first letter if target is equal or greater than last letter
  if (target >= letters[letters.length-1]) {
    return letters[0];
  }
  while (left <= right) {
    const mid = Math.round((left + right) / 2);
    if (letters[mid] <= target) {
      left = mid+1;
    } else {
      right = mid-1;
    }
  }
  return letters[left] > target
    ? letters[left]
    : letters[right];
};