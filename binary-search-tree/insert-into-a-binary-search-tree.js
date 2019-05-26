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
var insertIntoBST = function(node, val) {
  let curr = node;
  while (true) {
    const parent = curr;
    if (val < parent.val) {
      curr = curr.left;
      if (!curr) {
        parent.left = new TreeNode(val);
        break;
      }
    } else {
      curr = curr.right;
      if (!curr) {
        parent.right = new TreeNode(val);
        break;
      }
    }
  }
  return node;
};