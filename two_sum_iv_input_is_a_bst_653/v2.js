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
  while (curr < len) {
    const sum = list[curr] + list[len];
    if (sum === k) {
      return true;
    } else if (sum < k) {
      curr++;
    } else {
      len--;
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

