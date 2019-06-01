/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(node, key) {
  if (node === null) {
    return null;
  }
  if (node.val === key) {
    if (node.left === null && node.right === null) {
      return null;
    }
    if (node.left === null) {
      return node.right;
    }
    if (node.right === null) {
      return node.left;
    }
    const tempNode = getSmallestNode(node.right);
    node.val = tempNode.val;
    node.right = deleteNode(node.right, tempNode.val);
    return node;
  } else if (key < node.val) {
    node.left = deleteNode(node.left, key);
    return node;
  } else {
    node.right = deleteNode(node.right, key);
    return node;
  }
}

var getSmallestNode = function(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}