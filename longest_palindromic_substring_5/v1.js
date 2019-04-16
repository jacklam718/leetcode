/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let tmp = [];
  let result = '';
  for (let i = 0; i < s.length; i++) {
    for (let y = i; y < s.length; y++) {
      tmp.push(s[y]);
      if (
        (tmp.join('') === [...tmp].reverse().join('')) &&
        tmp.length >= result.length
      ) {
        result = tmp.join('');
      }
    }
    tmp = []
  }
  return result;
};