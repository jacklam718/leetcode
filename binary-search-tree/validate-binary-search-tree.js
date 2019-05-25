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
var isValidBST = function(node) {
  let stack = [];
  let lastNode;
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    if (lastNode && lastNode.val >= node.val) {
      return false;
    };
    lastNode = node;
    node = node.right;
  }
  return true;
};

