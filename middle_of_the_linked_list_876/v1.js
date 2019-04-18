/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let length = 0;
  let curr = head;
  // count length;
  while (curr) {
    curr = curr.next;
    length++;
  }
  // divide length
  length = Math.floor(length / 2);
  curr = head;
  while (length && curr.next) {
    curr = curr.next;
    length--;
  }
  return curr;
};