/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root, count = 1) {
  if (!root) {
    return true
  }
  const maxDiff = 1
  const balanced = Math.abs(depth(root.left) - depth(root.right)) <= maxDiff
  return balanced && isBalanced(root.left) && isBalanced(root.right)
};

var depth = function(node, count = 1) {
  if (!node) {
    return count
  }
  return Math.max(depth(node.left, count+1), depth(node.right, count+1));
};