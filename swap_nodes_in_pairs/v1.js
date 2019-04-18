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
var swapPairs = function(head) {
  let index = 0;
  let currNode = head;
  while (currNode && currNode.next) {
    if (index % 2 === 0) {
      const temp = currNode.val;
      currNode.val = currNode.next.val;
      currNode.next.val = temp;
    }
    currNode = currNode.next;
    index++
  }
  return head;
};