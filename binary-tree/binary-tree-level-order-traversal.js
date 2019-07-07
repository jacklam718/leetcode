/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(node) {
  if (!node) {
    return [];
  }
  const result = [];
  const queue = new Array(node);
  while (queue.length) {
    const size = queue.length;
    const temp = [];
    for (let i = 0; i < size; i++) {
      node = queue.shift();
      temp.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(temp);
  }
  return result;
};