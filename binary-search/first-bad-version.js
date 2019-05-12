/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 0;
    let right = n;
    let firstBadVersion = null;
    while (left <= right) {        
      const mid = ~~(left + right) / 2;
      const badVersion = isBadVersion(mid);
      if (badVersion && (mid < firstBadVersion || firstBadVersion === null)) {
        firstBadVersion = mid;
      }
      // to left else to right
      if (badVersion) {
        right = mid-1;
      } else {
        left = mid+1;
      }
    }
    return firstBadVersion;
  };
};