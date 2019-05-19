/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let left = 0;
  let right = letters.length-1;
  while (left <= right) {
    const mid = Math.round((left + right) / 2);
    if (letters[mid] <= target) {
      left = mid+1;
    } else {
      right = mid-1;
    }
  }
  if (letters[left] > target) {
    return letters[left];
  } else if (letters[right] > target) {
    return letters[right];
  }
  return letters[0];
};