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
  var recursive = function(node, result = []) {
    if (node) {
      result.push(node.val)
      recursive(node.left, result) 
      recursive(node.right, result) 
    }
    return result
  }
  return recursive(root)
};