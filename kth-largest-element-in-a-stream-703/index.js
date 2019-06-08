class KthLargest {
  /**
  * @param {number} k
  * @param {number[]} nums
  */
  constructor(k, nums) {
    this.k = k;
    this.bst = new BST(nums);
  }

  /** 
  * @param {number} val
  * @return {number}
  */
  add(val) {
    this.bst.insert(val);
    return this.bst.findKthLargest(this.k);
  }
}

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
    nums.forEach((num) => this.insert(num));
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


/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */