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
var preorderTraversal = function(root) {
  const stack = []
  const result = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      result.push(root.val)
      root = root.left
    }
    root = stack.pop()
    root = root.right
  }
  return result
};