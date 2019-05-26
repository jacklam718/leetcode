/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(node, val) {
  while (node) {
    if (val === node.val) {
      return node;
    }
    if (val > node.val) {
      node = node.right;
    } else {
      node = node.left;
    }
  }
  return null;
};