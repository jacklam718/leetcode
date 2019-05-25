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
var BSTIterator = function(root) {
  function *inorderGenerator(node) {
    const stack = [];
    while (node || stack.length) {
      while (node) {
        stack.push(node);
        node = node.left;
      }
      node = stack.pop();
      yield node.val;
      node = node.right;
    }
  }
  this.generator = inorderGenerator(root);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  if (this.last) {
    const last = this.last;
    this.last = null;
    return last.value;
  }
  const next = this.generator.next();
  return next.value;
  
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  if (!this.last) {
    const next = this.generator.next();
    this.last = next;
  }
  return !this.last.done;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */