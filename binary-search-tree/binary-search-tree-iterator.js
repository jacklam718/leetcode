/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
class BSTIterator {
  constructor(root) {
    this.stack = [];  
    this.pushAll(root);
  }
  
  next() {
    const node = this.stack.pop();
    if (!node) return;
    this.pushAll(node.right);
    return node.value;
  }
  
  hasNext() {
    return this.stack.length > 0;
  }
  
  pushAll(node) {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }
}

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */