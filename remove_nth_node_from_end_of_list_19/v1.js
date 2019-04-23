/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummyNode = new ListNode();
  dummyNode.next = head
  let length = 0;
  let firstNode = head;
  while (firstNode) {
    length++;
    firstNode = firstNode.next;
  }

  length -= n;
  firstNode = dummyNode;
  while (length > 0) {
    length--;
    firstNode = firstNode.next;
  }

  firstNode.next = firstNode.next.next;
  return dummyNode.next;
};