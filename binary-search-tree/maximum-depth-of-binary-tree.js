/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(node, count = 0) {
  if (!node) {
    return count
  }
  return Math.max(maxDepth(node.left, count+1), maxDepth(node.right, count+1))
};

