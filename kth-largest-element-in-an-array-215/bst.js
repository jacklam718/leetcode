/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const bst = new BST(nums);
  return bst.findKthLargest(k);
};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(nums) {
    this.root = null;
    
    for (const num of nums) {
      this.insert(num)
    }
  }
  
  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }
    let node = this.root;
    while (node) {
      if (val >= node.val) {
        if (!node.right) {
          node.right = new Node(val)
          return;
        }
        node = node.right;
      } else {
        if (!node.left) {
          node.left = new Node(val)
          return;
        }
        node = node.left;
      } 
    }
  }
  
  findKthLargest(k) {
    const stack = [];
    let node = this.root;
    while (node || stack.length) {
      while (node) {
        stack.push(node);
        node = node.right;
      }
      node = stack.pop();
      if (k-- == 1) {
        return node.val;
      }
      node = node.left;
    }
  }
}