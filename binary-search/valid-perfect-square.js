/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let n = 1;
  let base = 1;
  while (n < num) {
    n = base ** 2;
    base++;
  }
  return n === num;
};