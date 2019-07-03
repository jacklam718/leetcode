/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(node) {
  const stack = [];
  const result = [];
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      result.unshift(node.val);
      node = node.right;
    }
    node = stack.pop();
    node = node.left;
  }
  return result;
};