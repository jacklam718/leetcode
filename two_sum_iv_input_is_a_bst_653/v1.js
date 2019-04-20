/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const list = [];
  inorder(root, list);
  let curr = 0;
  let len = list.length-1;
  for (let i = 0; i < list.length; i++) {
    for (let j = i+1; j < list.length; j++) {
      if (list[i] + list[j] === k) {
        return true;
      }
    }
  }
  return false;
};

var inorder = function(root, list) {
  if (root) {
    inorder(root.left, list);
    list.push(root.val);
    inorder(root.right, list);
  }
}

