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
  let slower = head;
  let faster = head;
  while (faster && faster.next) {
    slower = slower.next;
    faster = faster.next.next;
  }
  return slower;
};
